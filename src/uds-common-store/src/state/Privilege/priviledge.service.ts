/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PrivilegesResponse } from './priviledge.model';
import { loadPrivilegesSuccess, loadPrivilegesFailure } from './priviledge.actions';

@Injectable({
  providedIn: 'root'
})
export class PrivilegesService {
  private apiUrl = 'http://localhost:3000/listchildprivs';

  constructor(private http: HttpClient, private store: Store) {}

  getPrivileges(): void {
    this.http.get<PrivilegesResponse>(this.apiUrl).pipe(
      map((privileges: PrivilegesResponse) => {
        this.store.dispatch(loadPrivilegesSuccess({ privileges }));
      }),
      catchError(error => {
        this.store.dispatch(loadPrivilegesFailure({ error }));
        return of(null);
      })
    ).subscribe();
  }
}