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
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './remote-app-2.routes';
import {  BreadcrumbModule } from '@def/ui/components/breadcrumb';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectCounter, selectRoles, selectRolesError } from '@uds-common-utils/store'
import { RemoteApp2Module } from './remote-app-2.module';

@Component({
  selector: 'app-remote-app-2',
  standalone: true,
  imports: [
    LayoutModule,
    I18NextModule,
    ClarityModule,
    CommonModule,
    RemoteApp2Module,
    RouterOutlet,
    RouterModule,
    BreadcrumbModule
  ],
  templateUrl: './remote-app-2.component.html',
})
export class RemoteApp2Component implements OnInit { 

  count$: Observable<number> | undefined
  roles$: Observable<unknown[]> | undefined;
  error$: Observable<unknown> | undefined;
  
  constructor(
    private store: Store,
  ){}

  ngOnInit(): void{
    this.count$ = this.store.pipe(select(selectCounter));
    this.roles$ = this.store.pipe(select(selectRoles));
    this.error$ = this.store.pipe(select(selectRolesError));
  }
}
