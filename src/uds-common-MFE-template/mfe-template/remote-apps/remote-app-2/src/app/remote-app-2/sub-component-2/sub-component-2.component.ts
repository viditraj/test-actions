/**
* Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClarityModule } from '@def/clr-angular';
import { LayoutModule } from '@def/ui/components/layout';
import { I18NextModule } from 'angular-i18next';
import { CommonModule } from '@angular/common';
import { DefDatagridModule  } from '@def/ui/components/datagrid-new';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SubComponent2ParentComponent } from './sub-component-2-parent.component';
import { BreadcrumbRouterService } from 'common-utils/services/breadcrumb-router.service';

@Component({  
    selector: 'app-subcomponent-2',
    standalone: true,
    imports: [  
        LayoutModule,
        I18NextModule,
        ClarityModule,
        CommonModule,
        DefDatagridModule,
        RouterOutlet,
    ],  
    templateUrl: './sub-component-2.component.html',

})
export class SubComponent2Component implements OnInit {
    url = this.router.url;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _wrapperComponent: SubComponent2ParentComponent,
    private _breadcrumbService: BreadcrumbRouterService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._breadcrumbService.updateBreadcrumbPaths([
      {label: 'Sub component 2', url: 'subcomponent2'},
    ])
  }
    onSelect(node: any) {
      const updatedUrl = "\/sub-component-2\/"+`${node.id}`
      this.url = this.url.replace("/sub-component-2", updatedUrl)
      this._wrapperComponent.onPathChange("subcomponent2/:id")
      this.router.navigate([this.url]);
    }

    clusterNodes = [
      {
        id: 1,
        in: 112,
        out: 22.37,
        totalused: 22.48,
        hddused: 498.84,
        hddsize: 10.62
      },
      {
        id: 2,
        in: 10,
        out: 15,
        totalused: 30.56,
        hddused: 508.24,
        hddsize: 100.62
      },
      {
        id: 3,
        in: 56,
        out: 89.53,
        totalused: 78.56,
        hddused: 798.84,
        hddsize: 345.62
      }
    ]
}
