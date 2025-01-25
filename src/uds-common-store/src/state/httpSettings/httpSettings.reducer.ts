/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/


import { createReducer, on } from '@ngrx/store';
import { loadHttpSettings, loadHttpSettingsSuccess, loadHttpSettingsFailure } from './httpSettings.actions';
import { HttpSettings } from './httpSettings.model';

export interface HttpSettingsState {
  httpSettings: HttpSettings | null;
  error: any;
}

const initialState: HttpSettingsState = {
  httpSettings: null,
  error: null
};

export const httpSettingsReducer = createReducer(
  initialState,
  on(loadHttpSettings, state => ({ ...state, error: null })),
  on(loadHttpSettingsSuccess, (state, { httpSettings }) => ({ ...state, httpSettings })),
  on(loadHttpSettingsFailure, (state, { error }) => ({ ...state, error }))
);