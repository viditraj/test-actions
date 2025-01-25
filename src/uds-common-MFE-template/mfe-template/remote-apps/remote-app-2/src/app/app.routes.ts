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
import { RemoteApp2Component } from './remote-app-2/remote-app-2.component';

export const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./remote-app-2/remote-app-2.routes').then(m => m.routes)
  },
];
