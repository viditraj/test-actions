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
 * Common module for components
 *
 * This module contains all the common components that can be used in any UDS MFE application.
 *
 * Each component in this module can be imported individually or all the components can be imported
 * by importing the module.
 *
 *
 * */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './src/sample/sample.component';

@NgModule({
  declarations: [
    // Components to declare here
    SampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Components to export here
    SampleComponent
  ]
})
export class ComponentsModule { }

