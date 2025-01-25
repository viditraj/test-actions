/**
* Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { Injectable } from '@angular/core';
import { IBreadCrumb } from '@def/ui/components/breadcrumb';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class BreadcrumbRouterService {
    private _breadcrumbPaths$: BehaviorSubject<IBreadCrumb[]> = new BehaviorSubject<IBreadCrumb[]>([]);
    public breadcrumbPaths$: Observable<IBreadCrumb[]> = this._breadcrumbPaths$.asObservable();

    public updateBreadcrumbPaths(paths: IBreadCrumb[]): void {
        this._breadcrumbPaths$.next(paths);
    }
}
