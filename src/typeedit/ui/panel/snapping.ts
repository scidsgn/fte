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

    const constructionSection = Accordion(
        "Construction angles", [
            Checkbox(
                () => font.settings.constructionEnabled,
                () => {
                    font.settings.constructionEnabled = !font.settings.constructionEnabled
                },
                (h) => {
                    font.on("settingChanged", (k: string) => {
                        if (k === "constructionEnabled")
                            h(font.settings.constructionEnabled)
                    })
                }
            )
        ], [
            Grid([
                NumberInput(
                    () => font.settings.constructionAngle0,
                    (v: number) => {
                        font.settings.constructionAngle0 = v
                    },
                    (h) => {
                        font.on("settingChanged", (k: string) => {
                            if (k === "constructionAngle0")
                                h(font.settings.constructionAngle0)
                        })
                    },
                    0, 180, 1
                ),
                NumberInput(
                    () => font.settings.constructionAngle1,
                    (v: number) => {
                        font.settings.constructionAngle1 = v
                    },
                    (h) => {
                        font.on("settingChanged", (k: string) => {
                            if (k === "constructionAngle1")
                                h(font.settings.constructionAngle1)
                        })
                    },
                    0, 180, 1
                ),
                NumberInput(
                    () => font.settings.constructionAngle2,
                    (v: number) => {
                        font.settings.constructionAngle2 = v
                    },
                    (h) => {
                        font.on("settingChanged", (k: string) => {
                            if (k === "constructionAngle2")
                                h(font.settings.constructionAngle2)
                        })
                    },
                    0, 180, 1
                ),
                NumberInput(
                    () => font.settings.constructionAngle3,
                    (v: number) => {
                        font.settings.constructionAngle3 = v
                    },
                    (h) => {
                        font.on("settingChanged", (k: string) => {
                            if (k === "constructionAngle3")
                                h(font.settings.constructionAngle3)
                        })
                    },
                    0, 180, 1
                )
            ])
        ]
    )

    panel.innerHTML = ""
    panel.appendChild(snappingSection)
    panel.appendChild(gridSection)
    panel.appendChild(constructionSection)
}