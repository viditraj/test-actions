/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const setValue = createAction(
  '[Value] Set Value',
  props<{ value: string }>()
);


export interface ValueState {
    value: string;
}

export const initialState: ValueState = {
    value: 'remote-app-1-value'
};

export const valueReducer = createReducer(
  initialState,
  on(setValue, (state, { value }) => ({ ...state, value }))
);


export const selectValueState = createFeatureSelector<ValueState>('value');

export const selectvalue = createSelector(
   selectValueState,
  (state: ValueState) => state.value
);

