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
import { PrivilegesResponse } from './priviledge.model';

export const loadPrivileges = createAction(
    '[Privileges] Load Privileges'
);

export const loadPrivilegesSuccess = createAction(
  '[Privileges] Load Privileges Success',
  props<{ privileges: PrivilegesResponse }>()
);
export const loadPrivilegesFailure = createAction(
  '[Privileges] Load Privileges Failure',
  props<{ error: any }>()
);