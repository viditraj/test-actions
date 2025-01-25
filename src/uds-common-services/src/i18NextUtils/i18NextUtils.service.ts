/**
 * Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

import { I18NextModule, ITranslationService, I18NEXT_SERVICE, defaultInterpolationFormat } from 'angular-i18next';
import { InitOptions } from 'i18next';
import { LOCALE_ID } from '@angular/core';

export const fetchTranslationFile = async (filePath: string) => {
  const fallbackPath = filePath.replace(/\/[a-z]{2}-[A-Z]{2}\//, '/en-US/');
  console.log("Inside fetchTranslationFile", filePath);
  if (filePath) {
    let response;
    try {
      response = await fetch(filePath);
      if (!response.ok) {
        console.warn(`Error fetching ${filePath}: ${response.statusText}. Falling back to ${fallbackPath}`);
        response = await fetch(fallbackPath);
      }
      return response;
    } catch (err) {
      console.error("Error while fetching: " + err);
    }
  }
  return {};
};

export const customRequest = async (options: any, url: string, payload: any, callback: any) => {
  let fetchTranslationsResponse: any;
  fetchTranslationsResponse = await fetchTranslationFile(url);
  if (fetchTranslationsResponse?.ok) {
    let fetchedTranslations = await fetchTranslationsResponse.json();
    callback(null, {
      data: JSON.stringify(fetchedTranslations),
      status: 200,
    });
  } else {
    callback(null, { status: fetchTranslationsResponse?.status });
  }
};

export const localeIdFactory = (i18next: ITranslationService) => {
  return i18next.language;
};

export const commonConfiguration: InitOptions = {
  supportedLngs: ['en-US', 'es-ES'],
  fallbackLng: false,
  returnEmptyString: false,
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
    lookupLocalStorage: 'i18nextLng',
  },
  interpolation: {
    format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
  },
  backend: {
    request: (options: any, url: string, payload: any, callback: any) => {
      customRequest(options, url, payload, callback);
    },
  },
  load: 'currentOnly',
};

export const COMMMON_I18N_PROVIDERS = [
  {
    provide: LOCALE_ID,
    useFactory: localeIdFactory,
    deps: [I18NEXT_SERVICE]
  }
];
