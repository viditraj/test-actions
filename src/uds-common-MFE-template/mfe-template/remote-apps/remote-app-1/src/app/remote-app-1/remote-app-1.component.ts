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
import { LayoutModule } from '@def/ui/components/layout';
import { I18NextModule } from 'angular-i18next';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BreadcrumbRouterService } from 'common-utils/services/breadcrumb-router.service';
import {  
  KeyManagerService,  
  RolesService,
  selectCounter,
  selectHttpSettings,
  selectPrivileges,
  selectRoles,
  selectRolesError,
  PrivilegesService,
  HttpSettingsService
} from '@uds-common-utils/store'
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { RemoteApp1Module } from './remote-app-1.module';

@Component({
  selector: 'app-remote-app-1',
  standalone: true,
  imports: [
    LayoutModule,
    I18NextModule,
    ClarityModule,
    CommonModule,
    RemoteApp1Module
  ],
  providers: [],
  templateUrl: './remote-app-1.component.html'
})
export class RemoteApp1Component implements OnInit { 
  url = this.router.url;

  count$: Observable<number> | undefined
  roles$: Observable<unknown[]> | undefined;
  error$: Observable<unknown> | undefined;
  httpSettings$: Observable<unknown> | undefined;
  priviledge$ : Observable<unknown> | undefined;

  // Import the store and API services in the Constructor

  constructor(
    private router: Router,
    private _breadcrumbService: BreadcrumbRouterService,
    private store: Store,
    private KeyManagerService: KeyManagerService,
    private RolesService: RolesService,
    private PrivilegesService: PrivilegesService,
    private HttpSettingsService: HttpSettingsService
  ){}

  ngOnInit(): void {
    //Fetch the value of a particular state from store using Selectors 
    this.count$ = this.store.pipe(select(selectCounter));
    this.httpSettings$ = this.store.pipe(select(selectHttpSettings))
    this.priviledge$ = this.store.pipe(select(selectPrivileges))

    // We can subscribe to the changes in state value
    this.count$.subscribe(value => console.log('count in ngInit', value));
    this.roles$?.subscribe(roles =>console.log('Changes in roles state', roles))

    this.roles$ = this.store.pipe(select(selectRoles));
    this.error$ = this.store.pipe(select(selectRolesError));

    //Fetch the API's which set the responses in store
    this.KeyManagerService.fetchKeyManager();
    this.RolesService.loadRoles();
    this.PrivilegesService.getPrivileges();
    this.HttpSettingsService.getHttpSettings();

    this._breadcrumbService.updateBreadcrumbPaths([
      {label: 'Remote App 1', url: 'remote-app-1'}
    ])
  }
}
