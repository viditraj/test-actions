/**
 * Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * Services Module
 *
 * This module contains all the services provided by the UDS common services.
 *
 * Each service in this module can be imported individually or all the services can be imported
 * by importing the module.
 *
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleService } from './src/sample/sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    // services here
      SampleService
  ],

})
export class ServicesModule { }
