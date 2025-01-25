/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@def/clr-angular';
import { LayoutModule } from '@def/ui/components/layout';
import { I18NextModule } from 'angular-i18next';
import { RouterOutlet } from '@angular/router';
import { SharedStoreModule } from '../../../../../uds-common-store/shared.module';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    LayoutModule,
    I18NextModule,
    ClarityModule,
    CommonModule,
    RouterOutlet,
    SharedStoreModule,
    AppModule
  ]
})
export class AppComponent {
  title = 'Product Name';
}
