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
import { HttpSettings } from './httpSettings.model';
import { loadHttpSettingsSuccess, loadHttpSettingsFailure } from './httpSettings.actions';

@Injectable({
  providedIn: 'root'
})
export class HttpSettingsService {
  private apiUrl = 'http://localhost:3000/http-settings';

  constructor(private http: HttpClient, private store: Store) {}

  getHttpSettings(): void {
    this.http.get<HttpSettings>(this.apiUrl).pipe(
      map((httpSettings: HttpSettings) => {
        this.store.dispatch(loadHttpSettingsSuccess({ httpSettings }));
      }),
      catchError(error => {
        this.store.dispatch(loadHttpSettingsFailure({ error }));
        return of(null);
      })
    ).subscribe();
  }
}