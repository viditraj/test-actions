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
import { valueReducer } from './../state/value';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature( 'shell-featureStore', valueReducer),
  ],
  providers: [],
})
export class AppModule { }
