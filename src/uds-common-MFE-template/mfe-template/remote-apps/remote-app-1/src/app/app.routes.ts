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

export const routes: Routes = [
  { path: '',
    loadComponent: () =>
      import('./remote-app-1/remote-app-1-parent.component').then((m) => m.RemoteApp1ParentComponent),
  },
];
