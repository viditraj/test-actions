/**
* Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { Component } from '@angular/core';
import { ClarityModule } from '@def/clr-angular';
import { LayoutModule } from '@def/ui/components/layout';
import { I18NextModule } from 'angular-i18next';
import { CommonModule } from '@angular/common';

@Component({  
    selector: 'app-sub-component-1',
    standalone: true,
    imports: [  
        LayoutModule,
        I18NextModule,
        ClarityModule,
        CommonModule,  
    ],  templateUrl: './sub-component-1.component.html',
})
export class SubComponent1Component {}
