const { app, BrowserWindow, globalShortcut } = require('electron')

function createWindow () {

  //Try Some Shortcuts
  globalShortcut.register('Alt+C', () => {
    win.loadURL('https://devhints.io/')
  })

  globalShortcut.register('CommandOrControl+Shift+Z', () => {
    win.loadURL('https://slack.com/')
  })

  globalShortcut.register('CommandOrControl+N', () => {
    win.loadFile('new-page.html')
  })

  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.on('ready', createWindow)