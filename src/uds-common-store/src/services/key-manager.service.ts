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
import { KEY_MANAGER } from '../constants/localStorageKeys';
import { LocalStorageService } from './../services/local-storage-service.service'

@Injectable({
  providedIn: 'root'
})
export class KeyManagerService {

  private localStorageKey = KEY_MANAGER
  private apiUrl = 'http://localhost:3000/keymanager-sed-settings'

  constructor(
    private localStorageService : LocalStorageService
  ) { }

  async fetchKeyManager(): Promise<any> {
    const storedData = this.localStorageService.getItem(this.localStorageKey)

    // Few API calls are not to be made everytime even through triggered.
    // In that case, check if the value exists in local storage.
    // Do not store sensitive data in local storage.

    if(!storedData) {
      try {
        const response = await fetch(this.apiUrl);
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.localStorageService.setItem(this.localStorageKey, JSON.stringify(data))
        return data
      } 
      catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
      }
    }
  }
}
