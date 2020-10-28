export const defaultAppSettings = {
    theme: "dark"
}

export const defaultPerFontSettings = {
    curvatureEnabled: false, // let's keep that false for now

    gridEnabled: true,
    gridMainGap: 64,
    gridSubdivisions: 4,

    curveSnapEnabled: true,
    handleSnapEnabled: true,
    metricsSnapEnabled: true,

    constructionEnabled: true,
    constructionAngle0: 0,
    constructionAngle1: 45,
    constructionAngle2: 90,
    constructionAngle3: 135,

    ellipseTension: 4 * (Math.SQRT2 - 1) / 3,
}