import { Font } from "../../font/font"
import Accordion from "./controls/accordion"
import Label from "./controls/label"
import Row from "./controls/row"
import TextInput from "./controls/textInput"

export function prepareFontInfoPanel(font: Font) {
    const panel = document.querySelector(
        "div.panelContents[data-tab=font]"
    )

    const fontInfoSection = Accordion(
        "Font info", [], [
            Label("Font family:"),
            TextInput(
                () => font.names.fontFamily,
                (v) => {
                    font.names.fontFamily = v
                    document.title = `${v} - FTE`
                }
            ),
            Label("Font subfamily:"),
            TextInput(
                () => font.names.fontSubfamily,
                (v) => font.names.fontSubfamily = v
            ),
            Label("Version:"),
            TextInput(
                () => font.names.version,
                (v) => font.names.version = v
            )
        ]
    )
    const authorInfo = Accordion(
        "Author info", [], [
            Label("Designer:"),
            TextInput(
                () => font.names.designer,
                (v) => font.names.designer = v
            ),
            Label("Manufacturer/Foundry:"),
            TextInput(
                () => font.names.manufacturer,
                (v) => font.names.manufacturer = v
            ),
            Row([
                Label("Vendor ID:"),
                TextInput(
                    () => font.info.vendorID,
                    (v) => font.info.vendorID = v,
                    null,
                    4
                )
            ])
        ]
    )

    panel.innerHTML = ""
    panel.appendChild(fontInfoSection)
    panel.appendChild(authorInfo)
}