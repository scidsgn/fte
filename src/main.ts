import { app, BrowserWindow, Menu } from "electron"
import { join } from "path"

app.on("window-all-closed", () => {
    app.quit()
})

app.on("ready", () => {
    const win = new BrowserWindow(
        {
            title: "FTE",
            width: 1280,
            height: 720,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            }
        }
    )

    win.setMenuBarVisibility(false)
    
    console.log(__dirname)
    win.loadFile("index.html")
})