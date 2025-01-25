/**
* Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { Component, OnInit, OnDestroy, ChangeDetectorRef, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBreadCrumb } from "@def/ui/components/breadcrumb";
import { ClarityModule } from '@def/clr-angular';
import { LayoutModule } from '@def/ui/components/layout';
import { BreadcrumbModule } from '@def/ui/components/breadcrumb'
import { I18NextModule } from 'angular-i18next';
import { Subscription } from "rxjs";
import { BreadcrumbRouterService } from "common-utils/services/breadcrumb-router.service";
import { RemoteApp1Component } from "./remote-app-1.component";

@Injectable()
@Component({
    selector: 'remote-app-1-parent',
    standalone: true,
    imports: [LayoutModule,
        I18NextModule,
        ClarityModule,
        CommonModule,
        BreadcrumbModule],
    providers: [BreadcrumbRouterService],
    templateUrl: './remote-app-1-parent.component.html',
  })
  export class RemoteApp1ParentComponent implements OnInit, OnDestroy{
    private _subscriptions = new Subscription()
    public breadcrumbPaths: IBreadCrumb[] = [];
    public selectedComponent: any = RemoteApp1Component;

    constructor(private _breadcrumbService: BreadcrumbRouterService, private _cdr: ChangeDetectorRef) {}
    ngOnInit(): void {
      this._subscriptions.add(
        this._breadcrumbService.breadcrumbPaths$.subscribe((paths: IBreadCrumb[]) => {
            this.breadcrumbPaths = [...paths];
            this._cdr.detectChanges();
        })
      )
    }
    ngOnDestroy(): void {
      this._subscriptions.unsubscribe();
    }

    onPathChange(newPathId: string){
      if(newPathId === 'remote-app-1'){
        this.selectedComponent = RemoteApp1Component;
        }
   }
  }
