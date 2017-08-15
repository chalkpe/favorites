const url = require('url')
const path = require('path')
const electron = require('electron')
const { app, BrowserWindow } = electron

let win = null

app.on('ready', () => {
  win = new BrowserWindow({ width: 400, height: 600, frame: false })

  if (require('process').env.NODE_ENV === 'production') {
    win.loadURL(url.format({
      slashes: true,
      protocol: 'file:',
      pathname: path.join(__dirname, 'index.html')
    }))
  } else {
    win.loadURL('http://localhost:8888')
  }

  win.on('closed', () => (win = null))
})
