
/**
 * Copyright (c) 2024 - 2025 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

const fs = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');

// Specify the source directory
const sourceDir = 'dist';

// Read the angular.json file
const angularJson = JSON.parse(fs.readFileSync('angular.json', 'utf8'));

console.log('############################# Build and publish Modules ###############################');

// Check for command line arguments
const moduleName = process.argv[2];

// Remove the dist folder
exec(`rm -rf ${sourceDir}`);

// Loop through all projects in the angular.json file
for (const projectName in angularJson.projects) {
    const project = angularJson.projects[projectName];

    // Check if the project is a library
    if (project.projectType === 'library') {
      try {
        // Check if the project name matches the argument or if the argument is '--all'
        if (moduleName === projectName || moduleName === '--all') {
            const packageJsonPath = path.resolve(project.root, 'package.json');

            if (fs.existsSync(packageJsonPath)) {
              const { name, version } = require(packageJsonPath);
              console.log(`\nPublishing package: ${name}@${version}......\n `);
              
              // Build the project
              execSync(`ng build ${projectName} --configuration=production`);
              console.log(`Built project: ${projectName}`);

              // Publish the package
              execSync(`npm publish ${path.resolve(sourceDir, projectName)}/ --access public --scope=uds-common-utils`);
              console.log(`Published ${projectName}@${version} successfully.`);
              console.log('############################################################');
            }
        }
      } catch (error) {
        console.error(`Failed to publish ${projectName}: ${error.message}`);
      }
    }
}
