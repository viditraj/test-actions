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
import { loadPrivileges, loadPrivilegesSuccess, loadPrivilegesFailure } from './priviledge.actions';
import { PrivilegesResponse } from './priviledge.model';

export interface PrivilegesState {
  privileges: PrivilegesResponse | null;
  error: any;
}

const initialState: PrivilegesState = {
  privileges: null,
  error: null
};

export const privilegesReducer = createReducer(
  initialState,
  on(loadPrivileges, state => ({ ...state, error: null })),
  on(loadPrivilegesSuccess, (state, { privileges }) => ({ ...state, privileges })),
  on(loadPrivilegesFailure, (state, { error }) => ({ ...state, error }))
);

