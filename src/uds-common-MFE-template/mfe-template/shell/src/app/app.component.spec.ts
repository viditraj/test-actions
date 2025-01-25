/**
* Copyright (c) 2024-2025 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import "common-utils/jasmine-setup.ts";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Resolve component resources
    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'Product Name' title`, () => {
    expect(component.title).toEqual('Product Name');
  });
});
