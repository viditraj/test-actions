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

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

    // Get data from local storage
    getItem(key: string): any {
      const item = localStorage.getItem(key);
  
      if (item) {
        return JSON.parse(item);
      }
  
      return null;
    }

      // Set data in local storage
    setItem(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }

    // Remove data from local storage
    removeItem(key: string): void {
      localStorage.removeItem(key);
    }

    // Clear all data from local storage
    clear(): void {
      localStorage.clear();
    }

}


