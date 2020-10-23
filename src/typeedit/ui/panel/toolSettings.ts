import { ITool } from "../../viewport/tools/tool"

export function updateToolSettingsPanel(tool: ITool) {
    const panel = document.querySelector(
        "div.panelContents[data-tab=toolsettings]"
    )

    panel.innerHTML = ""

    if (!tool.settingsPanel) {
        const label = document.createElement("p")
        label.className = "emptyPanel"

        label.innerHTML = "This tool has no settings."

        panel.appendChild(label)
    } else {
        tool.settingsPanel.forEach(
            i => panel.appendChild(i)
        )
    }
}