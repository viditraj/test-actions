/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/



import { TestBed } from '@angular/core/testing';
import { KeyManagerService } from './key-manager.service';
import "../jasmine-setup";

describe('KeyManagerService', () => {
  let service: KeyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
