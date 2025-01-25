/**
 * Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

import { TestBed } from '@angular/core/testing';
import { SampleService } from './sample.service';
import '../jasmine-setup.ts';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService]
    });
    service = TestBed.inject(SampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct data', () => {
    const result = service.getData();
    expect(result).toBe('Hello from Sample Service!');
  });
});
