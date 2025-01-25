/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/


import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RolesState } from './roles.reducers';

export const selectRolesState = createFeatureSelector<RolesState>('roles');

export const selectRoles = createSelector(
  selectRolesState,
  (state: RolesState) => state.roles
);

export const selectRolesError = createSelector(
  selectRolesState,
  (state: RolesState) => state.error
);