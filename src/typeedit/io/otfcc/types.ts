// Horizontal Header
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

// Font Header
type HEADTable = {
    created: number
    flags: any // todo
    fontDirectoryHInt: number
    fontRevision: number
    glyphDataFormat: number
    indexToLocFormat: number
    lowestRecPPM: number
    macStyle: any // todo
    modified: number
    unitsPerEm: number
    version: 1
    xMax: number
    xMin: number
    yMax: number
    yMin: number
}

type VariationItem = {
    delta: number
    on: string
}
type NumberOrVariation = number | [number, ...VariationItem[]]

type GLYFPoint = {
    on: boolean
    x: NumberOrVariation
    y: NumberOrVariation
}

// Glyph Data
type GLYFTable = {
    [name: string]: {
        advanceWidth: NumberOrVariation
        contours: GLYFPoint[][]
        instructions?: (string | number)[]
    }
}

// Character to Glyph Index Mapping
type CMAPTable = {
    [codepoint: number]: string
}

// Font Variations
type FVARTable = {
    axes: {
        [axis: string]: {
            minValue: number
            maxValue: number
            defaultValue: number
            flags: number
            axisNameID: number
        }
    }
    instances: {
        coordinates: {
            [axis: string]: number
        },
        flags: 0,
        subfamilyNameID: number
    }[]
    masters: {
        [master: string]: {
            [axis: string]: {
                start: number
                peak: number
                end: number
            }
        }
    }
}

// Naming
type NAMETable = {
    encodingID: number
    languageID: number
    nameID: number
    nameString: string
    platformID: number
}[]

// Color Palette
type CPALTable = {
    palettes: {
        colors: {
            red: number
            green: number
            blue: number
        }[]
    }[]
}

// Color
type COLRTable = {
    from: string
    to: {
        layer: string
        paletteIndex: number
    }[]
}[]

export type OTFCCData = {
    hhea: HHEATable
    head: HEADTable
    name: NAMETable

    glyph_order: string[]
    glyf: GLYFTable
    cmap: CMAPTable
    fvar?: FVARTable

    CPAL?: CPALTable
    COLR?: COLRTable
}