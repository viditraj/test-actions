/**
* Copyright (c) 2024 Dell Inc., or its subsidiaries. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*/

const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto",
    path: path.resolve("..",`builds/shell`),
    pathinfo: false,
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      /*library: {
        type: 'module'
      },*/
      name: "shell",
      filename: "remoteEntry.js",
      /*remotes: {
        remote-app-1: "http://localhost:4201/remote-app-1RemoteEntry.js",
      },*/
      shared: {
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^17.3.0",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^17.3.0",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^17.3.0",
        },
        '@def/ui': {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^9.0.0-70",
        },
        '@def/clr-icons': {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^4.2.0-48",
        },
        '@def/clr-ui': {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^4.2.0-48",
        },
        '@def/clr-angular': {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^4.2.0-48",
        },
        '@ngrx/store': {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^17.2.0",
        },
        '@angular/common/http': { 
          singleton: true, 
          strictVersion: true,
          requiredVersion: "^17.3.0",
        },
      },
      library: {
        type: "module",
      },
    }),
  ],
};