import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  // if in local dev env we are using the web
  if(isDev()) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    // else means in production we use the desktop app
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});
