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
import { loadRoles, loadRolesSuccess, loadRolesFailure } from './roles.actions';

export interface RolesState {
  roles: string[];
  error: any;
}

const initialState: RolesState = {
  roles: [],
  error: null
};

export const rolesReducer = createReducer(
  initialState,
  on(loadRoles, state => ({ ...state, error: null })),
  on(loadRolesSuccess, (state, { roles }) => ({ ...state, roles })),
  on(loadRolesFailure, (state, { error }) => ({ ...state, error }))
);