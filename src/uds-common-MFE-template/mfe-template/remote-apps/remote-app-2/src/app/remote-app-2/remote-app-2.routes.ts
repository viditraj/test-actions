/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { Routes } from '@angular/router';
import { RemoteApp2Component } from './remote-app-2.component';

export const routes: Routes = [
  {
    path: '',
    component: RemoteApp2Component,
    children:[
      { path: 'sub-component-1',
        data: {breadcrumb: 'Sub Component 1'},
        loadComponent: () =>
          import('./sub-component-1/sub-component-1.component').then((m) => m.SubComponent1Component),
      },
      { path: 'sub-component-2',
        loadComponent: () =>
          import('./sub-component-2/sub-component-2-parent.component').then((m) => m.SubComponent2ParentComponent),
        children: [
              { path: ':id',
                loadComponent: () => import('./sub-component-2/details-component/details-component.component').then((m)=>m.DetailsComponent)
              }
            ]
          }
        ]
      },
];
