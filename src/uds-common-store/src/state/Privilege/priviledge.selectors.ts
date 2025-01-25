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
import { PrivilegesState } from './priviledge.reducer';

export const selectPrivilegesState = createFeatureSelector<PrivilegesState>('privileges');

export const selectPrivileges = createSelector(
  selectPrivilegesState,
  (state: PrivilegesState) => state.privileges?.privilege
);

export const selectPrivilegesError = createSelector(
  selectPrivilegesState,
  (state: PrivilegesState) => state.error
);