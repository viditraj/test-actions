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
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'product-name/remote-app-1',
        pathMatch: 'full',
    },
    {
        path: 'product-name',
        children: [
            {
                path: 'remote-app-1',
                loadComponent: () =>
                    loadRemoteModule({
                        type: 'module',
                        remoteEntry: `${environment.REMOTE_APP_1_MFE_BASE_URL}/remote-app-1-RemoteEntry.js`,
                        exposedModule: './remote-app-1-parent',
                    }).then((m: any) => m.RemoteApp1ParentComponent).catch(err => console.error('Error loading remote module:', err)),
            },
            {
                path: 'remote-app-2',
                loadChildren: () => 
                    loadRemoteModule({
                        type: 'module',
                        remoteEntry: `${environment.REMOTE_APP_2_MFE_BASE_URL}/remote-app-2-RemoteEntry.js`,
                        exposedModule: './routes',
                    }).then((m: any) => m.routes)
                
                
            },
            {
                path: '**',
                loadComponent: () => import('common-utils/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
            },
        ],
    },
    {
        path: '**',
        loadComponent: () => import('common-utils/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
    },
];
