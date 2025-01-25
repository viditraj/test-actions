/**
 * Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
import * as path from 'path';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { jasmineTestRunnerConfig } from 'web-test-runner-jasmine';

const __dirname = dirname(fileURLToPath(import.meta.url));

function replaceRelativeImportsPlugin() {
  return {
    name: 'replace-relative-imports',
    transform(context) {
      if(context.path.endsWith('.spec.ts')){
        const content = context.body;
        const transformedContent = content.replace(/import\s+['"]([^'"]+)['"];/g, (match, p1) => {
          const isCommonUtils = p1.startsWith('common-utils');
          const isRelativeImport = p1.startsWith('.');

          if (isCommonUtils || !isRelativeImport) {
            const absolutePath = isCommonUtils ? resolve(__dirname, '../', p1) : path.resolve(path.dirname(context.path), p1);
            return `import '${absolutePath}'`;
          } else {
            return match; // Keep absolute imports as they are
          }
        });
        return { body: transformedContent };
      }
    },
  };
}

function angularFileTransformPlugin() {
    return {
      name: 'angular-file-transform',

      transform(context) {
        // Handle templateUrl and styleUrls imports
        if(context.path.endsWith('component.ts')){
          let code = context.body;

          // Transform templateUrl
           code = code.replace(
            /templateUrl:\s*['"`](.*?)['"`]/g,
            (match, url) => {
              const templatePath = "." + resolve(path.dirname(context.path), url);
              const template = readFileSync(templatePath, 'utf-8');
              return `template: \`${template}\``;
            }
          );

          // Transform styleUrls
          code = code.replace(
            /styleUrls:\s*\[(.*?)\]/g,
            (match, urls) => {
              const styleUrls = urls.split(',').map(url => {
                const trimmedUrl = url.trim().replace(/['"`]/g, '');
                const stylePath = "." + resolve(path.dirname(context.path), trimmedUrl);
                const style = readFileSync(stylePath, 'utf-8');
                return `\`${style}\``;
              });
              return `styles: [${styleUrls.join(',')}]`;
            }
          );

          // Transform styleUrl
           code = code.replace(
            /styleUrl:\s*['"`](.*?)['"`]/g,
            (match, url) => {
              const stylePath = "." + resolve(path.dirname(context.path), url);
              const styles = readFileSync(stylePath, 'utf-8');
              return `styles: \`${styles}\``;
            }
          );
          return { body: code };
        }
      }
    };
  }

export default {
    ...jasmineTestRunnerConfig(),
    files: ['src/**/*.spec.ts', '!**/node_modules/**'],
    setupFiles: ['common-utils/jasmine-setup.ts'],
    nodeResolve: true,
    preserveSymlinks: true,
    testsStartTimeout: 50000,
    testFramework: {
        framework: 'jasmine',
        config:{
            ui:'bdd',
        }
    },
    debug: true,
    coverage: true,
    coverageConfig: {
        report: true,
        reportDir: 'coverage',
        exclude: ['**/node_modules/**', '**/dist/**'],
    },
    plugins: [
        angularFileTransformPlugin(),
        replaceRelativeImportsPlugin(),
        esbuildPlugin({
          tsconfig: 'tsconfig.spec.json',
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
