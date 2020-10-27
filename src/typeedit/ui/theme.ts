import { settings } from "../settings/settings"

const fteThemes = [
    {
        theme: "light",

        handleSelected: "#111",
        handleFill: "#fff",
        handleMetricFill: "#444",
        handleControlArm: "#555",
        handleControlFill: "#555",

        handleAutoFill: "#00DE44",
        handleFreeFill: "#E78500",
        handleSharpFill: "#417BFF",
        handleDirFill: "#FF416E",

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
        guideGrid: "#3332",
        guideGridSubdiv: "#3331",

        constructionActive: "#0f0"
    },
    {
        theme: "dark",

        handleSelected: "#fff",
        handleFill: "#000",
        handleMetricFill: "#888",
        handleControlArm: "#aaa",
        handleControlFill: "#aaa",

        handleAutoFill: "#00DE44",
        handleFreeFill: "#E78500",
        handleSharpFill: "#417BFF",
        handleDirFill: "#FF416E",

        glyphOutline: "#969696",
        glyphGapOutline: "#222",
        glyphFill: "#2f2f2f",
        glyphOtherFill: "#fff",
        glyphMetric: "#aaa8",

        gindicatorActive: "#777",
        gindicatorActiveText: "#aaa",
        gindicator: "#333",
        gindicatorText: "#555",

        guideActive: "#f0f",
        guideGrid: "#9992",
        guideGridSubdiv: "#9991",

        constructionActive: "#0f0"
    }
]

export function getThemeColor(colorName: string) {
    const themeName = settings.theme
    const theme = fteThemes.find(
        t => t.theme === themeName
    ) as any

    return theme[colorName]
}