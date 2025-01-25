/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule, withHashLocation } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; 
import { routes } from './app.routes';
import { DefAppConfigService } from '@def/ui/components/layout';
import { AppConfig } from './a.config';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: DefAppConfigService, useClass: AppConfig},
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch())
  ],
};
