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

@Injectable({
  providedIn: 'root' // Service is provided at root level
})

export class SampleService {

  constructor() { }

  getData(): string {
    return 'Hello from Sample Service!';
  }
}
