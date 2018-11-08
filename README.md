# Electron Hello World App

[![N|Solid](https://camo.githubusercontent.com/627c774e3070482b180c3abd858ef2145d46303b/68747470733a2f2f656c656374726f6e6a732e6f72672f696d616765732f656c656374726f6e2d6c6f676f2e737667)](https://electronjs.org/)

##### Electron enables you to create desktop applications with pure JavaScript by providing a runtime with rich native (operating system) APIs. Here is the simple hello world app to learn and start your development with electron.

## Requirements
##### 1. Installing Node.js
First we need to install [Node.js](https://nodejs.org/en/) So go ahead and do that.
  
## Let's Start
##### Folder Structure
As far as development is concerned, an Electron application is essentially a Node.js application. The starting point is a package.json that is identical to that of a Node.js module. A most basic Electron app would have the following folder structure:
###### your-app/
├── package.json
├── main.js
└── index.html

#### 1. Initialize Node
Create a new empty folder for your new Electron application. Open up your command line client and run npm init. npm will guide you through creating a basic package.json file. The script specified by the main field is the startup script of your app.

```JSON
{
  "name": "your-app",
  "version": "0.1.0",
  "main": "main.js"
}
```

#### 2. Add Script to execute your electron app

```JSON
{
  "name": "your-app",
  "version": "0.1.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  }
}
```

#### 3. Installing Electron
At this point, you'll need to install electron itself. 
```
npm install --save-dev electron
```
If it's not work or you getting some permission issue, then try this one
```
npm install electron --unsafe-perm=true

```

#### 4. Create main.js
Electron apps are developed in JavaScript using the same principles and methods found in Node.js development. All APIs and features found in Electron are accessible through the electron module, which can be required like any other Node.js module:
##### A simple main.js file might wait for the application to be ready and open a window:
##
```javascript
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.on('ready', createWindow)
```

#### 5. Finally the index.html is the web page you want to show
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```
#### 6. Run your app
Once you've created your initial main.js, index.html, and package.json files, you can try your app by running npm start from your application's directory.
```sh
npm start
```
