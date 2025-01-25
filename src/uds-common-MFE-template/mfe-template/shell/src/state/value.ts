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
    value: 'shell-value'
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

