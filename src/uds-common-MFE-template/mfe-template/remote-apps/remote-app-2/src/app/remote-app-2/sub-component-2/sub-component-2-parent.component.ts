/**
* Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { Subscription } from "rxjs";
import { BreadcrumbRouterService } from "common-utils/services/breadcrumb-router.service"
import { Component, OnInit, OnDestroy, ChangeDetectorRef, Injectable } from '@angular/core';
import { IBreadCrumb } from "@def/ui/components/breadcrumb";
import { SubComponent2Component} from "./sub-component-2.component";
import { ClarityModule } from '@def/clr-angular';
import { LayoutModule } from '@def/ui/components/layout';
import { I18NextModule } from 'angular-i18next';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '@def/ui/components/breadcrumb'
import { DetailsComponent } from "./details-component/details-component.component";

@Injectable()
@Component({
    selector: 'sub-component-2-parent',
    standalone: true,
    imports: [LayoutModule,
        I18NextModule,
        ClarityModule,
        CommonModule,
        BreadcrumbModule],
    providers: [BreadcrumbRouterService],
    templateUrl: './sub-component-2-parent.component.html',
  })
  export class SubComponent2ParentComponent implements OnInit, OnDestroy{
    private _subscriptions = new Subscription()
    public breadcrumbPaths: IBreadCrumb[] = [];
    public selectedComponent: any = SubComponent2Component;

    constructor(private _breadcrumbService: BreadcrumbRouterService = new BreadcrumbRouterService(), private _cdr: ChangeDetectorRef) {}
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
      if(newPathId === 'subcomponent2'){
        this.selectedComponent = SubComponent2Component;
        }
       else if (newPathId === 'subcomponent2/:id'){
        
        this.selectedComponent = DetailsComponent;
        }
   }
  }
