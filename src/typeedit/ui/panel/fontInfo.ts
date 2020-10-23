import { Font } from "../../font/font"
import Accordion from "./controls/accordion"
import Label from "./controls/label"
import TextInput from "./controls/textInput"

export function prepareFontInfoPanel(font: Font) {
    const panel = document.querySelector(
        "div.panelContents[data-tab=font]"
    )

    const fontInfoSection = Accordion(
        "Font info", [], [
            Label("Font family:"),
            TextInput(
                () => font.info.fontFamily,
                (v) => {
                    font.info.fontFamily = v
                    document.title = `${v} - FTE`
                }
            ),
            Label("Font subfamily:"),
            TextInput(
                () => font.info.fontSubfamily,
                (v) => font.info.fontSubfamily = v
            ),
            Label("Version:"),
            TextInput(
                () => font.info.version,
                (v) => font.info.version = v
            )
        ]
    )
    const authorInfo = Accordion(
        "Author info", [], [
            Label("Designer:"),
            TextInput(
                () => font.info.designer,
                (v) => font.info.designer = v
            ),
            Label("Manufacturer/Foundry:"),
            TextInput(
                () => font.info.manufacturer,
                (v) => font.info.manufacturer = v
            )
        ]
    )

    panel.innerHTML = ""
    panel.appendChild(fontInfoSection)
    panel.appendChild(authorInfo)
}