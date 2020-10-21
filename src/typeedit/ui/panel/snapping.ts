import { TouchBarLabel } from "electron"
import { Font } from "../../font/font"
import Accordion from "./controls/accordion"
import ButtonGroup from "./controls/buttonGroup"
import Checkbox from "./controls/checkbox"
import Grid from "./controls/grid"
import Label from "./controls/label"
import NumberInput from "./controls/numberInput"
import Row from "./controls/row"
import ToggleButton from "./controls/toggleButton"

export function prepareSnappingPanel(font: Font) {
    const panel = document.querySelector(
        "div.panelContents[data-tab=snapping]"
    )

    const snappingSection = Accordion(
        "Snapping", [], [
            ButtonGroup([
                ToggleButton(
                    "curvesnap",
                    () => font.settings.curveSnapEnabled,
                    () => {
                        font.settings.curveSnapEnabled = !font.settings.curveSnapEnabled
                    },
                    (h) => {
                        font.on("settingChanged", (k: string) => {
                            if (k === "curveSnapEnabled")
                                h(font.settings.curveSnapEnabled)
                        })
                    }
                ),
                ToggleButton(
                    "handlesnap",
                    () => font.settings.handleSnapEnabled,
                    () => {
                        font.settings.handleSnapEnabled = !font.settings.handleSnapEnabled
                    },
                    (h) => {
                        font.on("settingChanged", (k: string) => {
                            if (k === "handleSnapEnabled")
                                h(font.settings.handleSnapEnabled)
                        })
                    }
                ),
                ToggleButton(
                    "metricsnap",
                    () => font.settings.metricsSnapEnabled,
                    () => {
                        font.settings.metricsSnapEnabled = !font.settings.metricsSnapEnabled
                    },
                    (h) => {
                        font.on("settingChanged", (k: string) => {
                            if (k === "metricsSnapEnabled")
                                h(font.settings.metricsSnapEnabled)
                        })
                    }
                )
            ])
        ]
    )

    const gridSection = Accordion(
        "Grid", [
            Checkbox(
                () => font.settings.gridEnabled,
                () => {
                    font.settings.gridEnabled = !font.settings.gridEnabled
                },
                (h) => {
                    font.on("settingChanged", (k: string) => {
                        if (k === "gridEnabled")
                            h(font.settings.gridEnabled)
                    })
                }
            )
        ], [
            Grid([
                Row([
                    Label("Size:"),
                    NumberInput(
                        () => font.settings.gridMainGap,
                        (v: number) => {
                            font.settings.gridMainGap = v
                        },
                        (h) => {
                            font.on("settingChanged", (k: string) => {
                                if (k === "gridEnabled")
                                    h(font.settings.gridMainGap)
                            })
                        },
                        1, 1000, 1
                    )
                ]),
                Row([
                    Label("Div:"),
                    NumberInput(
                        () => font.settings.gridSubdivisions,
                        (v: number) => {
                            font.settings.gridSubdivisions = v
                        },
                        (h) => {
                            font.on("settingChanged", (k: string) => {
                                if (k === "gridEnabled")
                                    h(font.settings.gridSubdivisions)
                            })
                        },
                        1, 20, 1
                    )
                ])
            ])
        ]
    )

    panel.innerHTML = ""
    panel.appendChild(snappingSection)
    panel.appendChild(gridSection)
}