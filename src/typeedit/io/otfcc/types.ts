type HHEATable = {
    advanceWidthMax: number
    ascender: number
    caretOffset: number
    caretSlopeRise: number
    caretSlopeRun: number
    descender: number
    lineGap: number
    minLeftSideBearing: number
    minRightSideBearing: number
    version: number
    xMaxExtent: number
}

export type OTFCCData = {
    hhea: HHEATable
}