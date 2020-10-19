import { settings } from "../settings/settings"

const fteThemes = [
    {
        theme: "light",

        handleSelected: "#111",
        handleFill: "#fff",
        handleMetricFill: "#444",
        handleControlArm: "#555",
        handleControlFill: "#555",

        glyphOutline: "#000",
        glyphGapOutline: "#fff",
        glyphFill: "#888",
        glyphOtherFill: "#000",
        glyphMetric: "#3338",

        gindicatorActive: "#aaa",
        gindicatorActiveText: "#555",
        gindicator: "#eee",
        gindicatorText: "#aaa",

        guideActive: "#f0f",
        guideGrid: "#3332"
    },
    {
        theme: "dark",

        handleSelected: "#eee",
        handleFill: "#000",
        handleMetricFill: "#888",
        handleControlArm: "#999",
        handleControlFill: "#999",

        glyphOutline: "#fff",
        glyphGapOutline: "#222",
        glyphFill: "#333",
        glyphOtherFill: "#fff",
        glyphMetric: "#aaa8",

        gindicatorActive: "#777",
        gindicatorActiveText: "#aaa",
        gindicator: "#333",
        gindicatorText: "#555",

        guideActive: "#f0f",
        guideGrid: "#9992"
    }
]

export function getThemeColor(colorName: string) {
    const themeName = settings.theme
    const theme = fteThemes.find(
        t => t.theme === themeName
    ) as any

    return theme[colorName]
}