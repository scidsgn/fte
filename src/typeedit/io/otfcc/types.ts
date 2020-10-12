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
export type NumberOrVariation = number | [number, ...VariationItem[]]

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

// OS/2
type OS2v0Body = {
    xAvgCharWidth: number
    usWeightClass: number
    usWidthClass: number
    fsType: {} // TODO
    ySubscriptXSize: number
    ySubscriptYSize: number
    ySubscriptXOffset: number
    ySubscriptYOffset: number
    ySuperscriptXSize: number
    ySuperscriptYSize: number
    ySuperscriptXOffset: number
    ySuperscriptYOffset: number
    yStrikeoutSize: number
    yStrikeoutPosition: number
    sFamilyClass: number
    panose: number[]
    ulUnicodeRange1: {} // TODO
    ulUnicodeRange2: {}
    ulUnicodeRange3: {}
    ulUnicodeRange4: {}
    achVendID: string
    fsSelection: {} // TODO
    usFirstCharIndex: number
    usLastCharIndex: number
    sTypoAscender: number
    sTypoDescender: number
    sTypoLineGap: number
    usWinAscent: number
    usWinDescent: number
}

type OS2v1Body = OS2v0Body & {
    ulCodePageRange1: {} // TODO
    ulCodePageRange2: {}
}

type OS2v4Body = OS2v1Body & {
    sxHeight: number
    sCapHeight: number
    usDefaultChar: number
    usBreakChar: number
    usMaxContext: number
}

type OS2v5Body = OS2v4Body & {
    usLowerOpticalPointSize: number
    usUpperOpticalPointSize: number
}

export type OS2Table =  { version: 4 } & OS2v4Body

export type OTFCCData = {
    hhea: HHEATable
    head: HEADTable
    name: NAMETable
    OS_2: OS2Table

    glyph_order: string[]
    glyf: GLYFTable
    cmap: CMAPTable
    fvar?: FVARTable

    CPAL?: CPALTable
    COLR?: COLRTable
}