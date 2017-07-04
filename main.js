const url = require('url')
const path = require('path')
const electron = require('electron')
const { app, BrowserWindow } = electron

let win = null

app.on('ready', () => {
  win = new BrowserWindow({ width: 400, height: 600 })

  win.loadURL(url.format({
    slashes: true,
    protocol: 'file:',
    pathname: path.join(__dirname, 'index.html')
  }))

  win.on('closed', () => (win = null))
})
