const packager = require("electron-packager")
const { join } = require("path")

if (process.platform !== "win32")
    throw new Error(
        "Currently not supported on platforms other than Windows."
    )

packager({
    name: "FTE",
    appVersion: "0.1",

    dir: __dirname,
    icon: join(__dirname, "design/icon/prealpha/icon.ico"),

    out: join(__dirname, "packages"),
    overwrite: true
}).then(paths => {
    console.log(`Packages created:\n\t${paths.join("\n\t")}`)
})