/**
* Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { Component, OnInit } from '@angular/core';
import { ClarityModule } from '@def/clr-angular';
import { I18NextModule } from 'angular-i18next';
import { CommonModule } from '@angular/common';
import {  ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbRouterService } from 'common-utils/services/breadcrumb-router.service';
import { IBreadCrumb } from '@def/ui/components/breadcrumb';

@Component({  
    selector: 'app-details-component',
    standalone: true,
    imports: [    
        I18NextModule,
        ClarityModule,
        CommonModule,  
    ], 
    templateUrl: './details-component.component.html',
})
    
export class DetailsComponent implements OnInit{  
    id!: string;
    public breadcrumbPaths: IBreadCrumb[] = [];
    public selectedComponent: any = DetailsComponent;

    constructor( 
        private _breadcrumbService: BreadcrumbRouterService,
        private route: ActivatedRoute,
        private router: Router,
    ){} 

  ngOnInit(): void {     
     this.id = this.router.url.split('/').pop() || '';
    
    this._breadcrumbService.updateBreadcrumbPaths([
        {label: 'Sub Component 2', url: 'subcomponent2'},
        {label: this.id, url: 'subcomponent2/:id'}
    ])
}
}
