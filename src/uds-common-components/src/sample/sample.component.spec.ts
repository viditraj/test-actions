/**
 * Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */


// Note :- Added empty file to avoid build error. Please remove when actual component is added.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleComponent } from './sample.component';
import '../jasmine-setup.ts';

describe('SampleComponent', () => {
  
    let component: SampleComponent;
    let fixture: ComponentFixture<SampleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SampleComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(SampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the SampleComponent', () => {
      expect(component).toBeTruthy();
    });

    it('should have the correct title', () => {
      expect(component.title).toEqual('Sample');
    });

    it('should render the correct text', () => {
      const element = fixture.nativeElement.querySelector('p');
      expect(element.textContent).toContain('sample works!');
    });
});
