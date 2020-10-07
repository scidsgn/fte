import { app, BrowserWindow } from "electron"
import { join } from "path"

app.on("window-all-closed", () => {
    app.quit()
})

app.on("ready", () => {
    const win = new BrowserWindow(
        {
            width: 1280,
            height: 720,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            }
        }
    )
    
    console.log(__dirname)
    win.loadFile("index.html")
})