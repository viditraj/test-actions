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
 * MFE template module
 *
 * This module exports the common components and services to be used in all the UDS MFE projects.
 * This module contains a MFE template component that can be used to initialize a new MFE application.
 * The MFE template component also exports the common components and services to be used in the MFE application.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // Components to declare here
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Components to export here
  ]
})
export class MFEtemplateModule { }
