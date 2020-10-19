import { EventEmitter } from "events"
import { Font } from "../font/font"
import { defaultAppSettings, defaultPerFontSettings } from "./defaults"
import { createSettingsProxy } from "./proxy"

export type FontSettings = typeof defaultPerFontSettings
export type AppSettings = typeof defaultAppSettings

const appSettings: Partial<AppSettings> = {}

export const settingsEvent = new EventEmitter()
export const settings = createSettingsProxy(
    appSettings, defaultAppSettings, settingsEvent
)

export function createFontSettings(
    font: Font, settings: Partial<FontSettings>
): FontSettings {
    return createSettingsProxy(
        settings, defaultPerFontSettings, font
    )
}