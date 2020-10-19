export function accelStringToUserFriendly(str: string) {
    return str.replace("^", "Ctrl-")
              .replace("+", "Shift-")
              .replace("!", "Alt-")
              .replace("Key", "")
}

export function accelStringToElectron(str: string) {
    return str.replace("+", "Shift+")
              .replace("^", "CmdOrCtrl+")
              .replace("!", "Alt+")
              .replace("Key", "")
}