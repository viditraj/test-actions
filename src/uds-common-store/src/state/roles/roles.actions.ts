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

export const loadRoles = createAction('[Roles] Load Roles');
export const loadRolesSuccess = createAction('[Roles] Load Roles Success', props<{ roles: string[] }>());
export const loadRolesFailure = createAction('[Roles] Load Roles Failure', props<{ error: any }>());
