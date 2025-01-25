# UDS Common Utils

UDS Common Utils is a collection of reusable components, services, styles, and build tools for UDS MFE applications

[NPM Package: 1.0.0](https://uds.artifactory.cec.lab.emc.com/artifactory/api/npm/uds-common-utils/)

## Table of Contents

- [UDS Common Utils](#uds-common-utils)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Local Build](#local-build)
    - [Pre-publish the build](#pre-publish-the-build)
  - [Usage](#usage)
      - [Components](#components)
      - [Services](#services)
      - [Styles](#styles)
      - [Build Tools](#build-tools)
      - [MFE Template](#mfe-template)
  - [Helpful Links](#helpful-links)

## Getting Started

To get started with UDS Common Utils, you can follow these steps:

1. Clone the repository:

   ```shell
   $ git clone https://eos2git.cec.lab.emc.com/powerscale-misc/uds-common-utils.git
   ```

2. Install dependencies
    ```shell
    $ cd uds-common-utils
    $ npm install
    ```
3. To support basic authentication with pscale-npm-local repository create .npmrc file
   .npmrc file location
    Windows:  %userprofile%\.npmrc
    Linux: ~/.npmrc

 - Copy content of .npmrc file from this repostiry to newly created .npmrc file.
 - Update email and auth token
 - Generate auth token using following command
     ```shell
     $ npm adduser --scope=uds-common-utils
     ```

4. Build and publish the project
uds-common-utils libaray supports modular build process.
Available modules are:

    - uds-common-MFE-template
    - uds-common-build-tools
    - uds-common-components
    - uds-common-services
    - uds-common-styles

Use below commonds to build and publish the modules

- To build and publish all modules
    ```shell
    $ npm run publish:all
    ```

- To build and publish specific module
    npm run publish:<module_name>
    ```shell
    $ npm run publish:uds-common-build-tools
    ```
## Local Build
How to develope code and build it. For example, if you wat to add new common service then,

1. Add your code in uds-common-services
     follow folder structure from https://confluence.cec.lab.emc.com/pages/viewpage.action?spaceKey=UDS&title=Design+Document+for+UDS+-+Element+Manager+UI+Architecture#DesignDocumentforUDSElementManagerUIArchitecture-UDS-common-utils

2. Export service in services.module.ts file

3. To build code locally run
    ```shell
    $ npm run build:uds-common-services
    ```
	This command will create build in dist folder
4. In application package.json add below line

   ``` "@uds-common-utils/services": "file:../uds-common-utils/dist/uds-common-services",```

5. run npm install

### Pre-publish the build
To check npm package before publishing it.

```shell
$ npm run prepublishOnly: uds-common-services
```

## Usage
#### Components
UDS Common Utils provides a set of reusable components that can be used in any UDS MFE application.

To use the components, follow these steps:

1. Install the components using npm:

    ```bash
    $ npm install @uds-common-utils/components --scope=uds-common-utils
    ```
    or add below line in package.json file and run npm install
        ```
        "@uds-common-utils/components": "1.0.0",
        ```

2. Import the components in your code:
    ```js
    import { ComponentName } from '@uds-common-utils/components';
    ```

#### Services
UDS Common Utils provides a set of reusable services that can be used in any UDS MFE application.

To use the services, follow these steps:

1. Install the services using npm:

    ```shell
    $ npm install @uds-common-utils/services --scope=uds-common-utils
    ```
    or add below line in package.json file and run npm install
    ``` "@uds-common-utils/services": "1.0.0",```

2. Import the services in your code:
    ```js
    import { ServiceName } from '@uds-common-utils/services';
    ```

#### Styles
UDS Common Utils provides a set of reusable styles that can be used in any UDS MFE application.

To use the styles, follow these steps:

1. Install the styles using npm:

    ```shell
    $ npm install @uds-common-utils/styles --scope=uds-common-utils
    ```
    or add below line in package.json file and run npm install

    ``` "@uds-common-utils/styles": "1.0.0",```

2. Import the styles in your code:

    ```js
    import { StyleName } from '@uds-common-utils/styles';
    ```

#### Build Tools
UDS Common Utils provides a set of reusable build tools that can be used in any UDS MFE application.

To use the build tools, follow these steps:

1. Install the build tools using npm:
    ```shell
    $ npm install @uds-common-utils/build-tools --scope=uds-common-utils
    ```
    or add below line in package.json file and run npm install

    ``` "@uds-common-utils/build-tools": "1.0.0",```

2. Import the build tools in your code:
    ```js
    import { BuildToolName } from '@uds-common-utils/build-tools';
    ```

#### MFE Template
UDS Common Utils provides a set of reusable template code that can be used in any UDS MFE application.

To use the MFE template, follow these steps:

1. Install the MFE template using npm:
    ```shell
    $ npm install @uds-common-utils/MFE-template --scope=uds-common-utils
    ```
    or add below line in package.json file and run npm install

    ``` "@uds-common-utils/MFE-template": "1.0.0",```

2. Import the template in your code:
    ```js
    import { templateName } from '@uds-common-utils/MFE-template';
    ```

## Helpful Links

1. [UI Architecture Documentation](https://confluence.cec.lab.emc.com/display/UDS/Design+Document+for+UDS+-+Element+Manager+UI+Architecture)
2. [Best practices for Angular coding](https://v17.angular.io/guide/styleguide#angular-coding-style-guide)
3. [jfrog-artifactory-documentation](https://jfrog.com/help/r/jfrog-artifactory-documentation/authenticate-npm-using-basic-authentication)
