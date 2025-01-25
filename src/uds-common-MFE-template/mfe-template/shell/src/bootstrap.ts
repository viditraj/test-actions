/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { routes } from '../src/app/app.routes';
import { provideRouter, RouterModule, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig
).catch((err) =>
  console.error(err)
);
