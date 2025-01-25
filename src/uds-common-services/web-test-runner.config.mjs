/**
 * Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { jasmineTestRunnerConfig } from 'web-test-runner-jasmine';


export default {
    ...jasmineTestRunnerConfig(),
    files: ['src/**/**/*.spec.ts', '!**/node_modules/**'],
    setupFiles: ['src/jasmine-setup.ts'],
    nodeResolve: true,
    preserveSymlinks: true,
    testsStartTimeout: 50000,
    testFramework: {
        framework: 'jasmine',
        config:{
            ui:'bdd',
        }
    },
    debug: false, // make this true to see debugging output
    coverage: true,
    coverageConfig: {
        report: true,
        reportDir: 'coverage',
        exclude: ['**/node_modules/**', '**/dist/**'],
    },
    plugins: [
        esbuildPlugin({
          ts: true,
          tsx: true,
          json: true,
          js: true,
          jsx: true,
          target: 'es2022',
          sourceMap: true,
          loaders: {
            '.ts': 'ts',
            '.html': 'text',
            '.scss': 'text',
            '.css': 'text'
          }
        })
    ],
    browsers: [
        playwrightLauncher({ product: 'chromium' }),
        playwrightLauncher({ product: 'firefox' }),
        playwrightLauncher({ product: 'webkit' })
    ],
};
