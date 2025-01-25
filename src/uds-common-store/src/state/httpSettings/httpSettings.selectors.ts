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
import { HttpSettingsState } from './httpSettings.reducer';

export const selectHttpSettingsState = createFeatureSelector<HttpSettingsState>('httpSettings');

export const selectHttpSettings = createSelector(
  selectHttpSettingsState,
  (state: HttpSettingsState) => state.httpSettings?.webui_ran_access
);

export const selectHttpSettingsError = createSelector(
  selectHttpSettingsState,
  (state: HttpSettingsState) => state.error
);