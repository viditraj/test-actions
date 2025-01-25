// This file can be replaced during build by using the `fileReplacements` array.// `ng build` replaces `environment.ts` with `environment.prod.ts`.// The list of file replacements can be found in `angular.json`.
export const environment = { 
     production: false,  
     BASE_URL: 'http://localhost:4200',
     // To provide live app for hot reload
     //REMOTE_APP_1_MFE_BASE_URL: 'http://localhost:4201',
     // To provide static builds of remote apps
     REMOTE_APP_1_MFE_BASE_URL: 'http://localhost:4002/remote-apps/remote-app-1',
     // To provide live app for hot reload
     REMOTE_APP_2_MFE_BASE_URL: 'http://localhost:4203',
     //REMOTE_APP_2_MFE_BASE_URL: 'http://localhost:4002/remote-apps/remote-app-2',
};
/* * For easier debugging in development mode, you can import the following file * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`. * * This import should be commented out in production mode because it will have a negative impact * on performance if an error is thrown. */// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
