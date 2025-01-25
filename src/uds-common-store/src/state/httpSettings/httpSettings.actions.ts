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
import { HttpSettings } from './httpSettings.model';

export const loadHttpSettings = createAction(
    '[HttpSettings] Load Http Settings');

export const loadHttpSettingsSuccess = createAction(
    '[HttpSettings] Load Http Settings Success',
    props<{ httpSettings: HttpSettings }>()
);
export const loadHttpSettingsFailure = createAction(
    '[HttpSettings] Load Http Settings Failure',
    props<{ error: any }>()
);