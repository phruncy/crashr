import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const createBrowserWindow = (): BrowserWindow => 
{
  let browserWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  });
  return browserWindow;  
}

const openWindow = (): void => 
{
  const window: BrowserWindow = createBrowserWindow();
  const indexHTML = path.join(__dirname + '/index.html');
  window.loadFile(indexHTML).then(() => {
      
  });
  //window.webContents.openDevTools();
}

app.on('ready', openWindow);
app.on('window-all-closed', app.quit);