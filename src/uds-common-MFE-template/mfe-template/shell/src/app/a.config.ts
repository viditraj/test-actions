/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { Injectable } from '@angular/core';
import { DefAppConfigService } from '@def/ui/components/layout';

@Injectable()
export class AppConfig extends DefAppConfigService {
    constructor() {
        super();
        this.headerLogo = true;
        const nav = [{
                name: 'Remote App 1',
                icon: 'dell-reports',
                link: '/product-name/remote-app-1',
            },
            {
                name: 'Remote App 2',
                icon: 'dell-volumes',
                children: [
                    {
                        name: 'Sub component 1',
                        link: '/product-name/remote-app-2/sub-component-1',
                    },
                    {
                        name: 'Sub component 2',
                        link: '/product-name/remote-app-2/sub-component-2',
                    },
                ],
            },
            ];
        this.product = {
            loginTitle: 'Product name',
            title: 'Product name',
            version: '1.0.0',
            copyright: '© 2024 Dell Inc. All rights reserved.',
        };
        this.logoName = 'dell-technologies-logo';
        this.navigation = nav;
    }
}




