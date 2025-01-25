/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/


import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './src/state/counter/counter.reducer';
import { rolesReducer } from './src/state/roles/roles.reducers';
import { httpSettingsReducer } from './src/state/httpSettings/httpSettings.reducer';
import { privilegesReducer } from './src/state/Privilege/priviledge.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ActionReducer, MetaReducer } from '@ngrx/store';

import { localStorageSync } from 'ngrx-store-localstorage';

// Below function automatically syncs the state mentioned in the keys in the local Storage

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['count', 'roles'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


// Add all the state to the root store that need to be import together in Shell/MFEs
// Since we are creating a root store here, whereever we import this module cannot have a root module
// Add metareducer to subscribe to any changes amde to the state mentioned in the StoreModule.

@NgModule({
  imports: [
    StoreModule.forRoot({ 
      count: counterReducer,
      roles: rolesReducer,
      httpSettings: httpSettingsReducer,
      privileges : privilegesReducer
     }, 
     { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
})
export class SharedStoreModule {}