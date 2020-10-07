export function accelStringToUserFriendly(str: string) {
    return str.replace("^", "Ctrl-")
              .replace("+", "Shift-")
              .replace("!", "Alt-")
              .replace("Key", "")
}