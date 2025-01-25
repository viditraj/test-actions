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
import { Store } from '@ngrx/store';
import { loadRoles, loadRolesSuccess, loadRolesFailure } from './roles.actions';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private apiUrl = 'http://localhost:3000/roles';

  constructor(private http: HttpClient, private store: Store) {}

  loadRoles() {
    this.store.dispatch(loadRoles());

    this.http.get<any[]>(this.apiUrl).pipe(
      map(roles => this.store.dispatch(loadRolesSuccess({ roles }))),
      catchError(error => of(this.store.dispatch(loadRolesFailure({ error }))))
    ).subscribe();
  }
}

