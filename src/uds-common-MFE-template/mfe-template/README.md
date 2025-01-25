# mfe-template

This a template for microfrontend based web applications. This template uses Angular-17, IDS and module federation

## Prerequisite

Run `npm install` at project level(mfe-template) to install dependencies

## To run application with all static builds of all apps
- Run `npm run build` (Creates builds of all apps - remotes apps + root)
- Run `npm run serve:apps` (Starts builds of remote app using http server on port - 4002)
- Open a new terminal navigate to mfe-template - Run  `npm run start:standalone` (Starts root app in dev mode with builds of remote app)

## To run application with specific apps in watch mode(allows hot reload of specific remote app) (using example of remote-app-1 in the below steps):
- Run `npm run build` (creates build of all apps - remotes apps + root)
- Run `npm run serve:apps`  (Starts builds of remote app using http server on port - 4002)
- Open a new terminal navigate to `remote-apps/remote-app-1`
- Run `npm start` - starts remote-app-1 app on port 4201 in dev mode
- Go to `shell/environments/environment.ts`
- REMOTE_APP_1_MFE_BASE_URL value must be:
    ```REMOTE_APP_1_MFE_BASE_URL: 'http://localhost:4201'```
  
- Open a new terminal navigate to mfe-template - Run  `npm run start:standalone` (Starts root app in dev mode with builds of remote app)

## Running unit tests

Run `ng test` to execute the unit tests via [web-test-runner](https://modern-web.dev/docs/test-runner/overview/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
