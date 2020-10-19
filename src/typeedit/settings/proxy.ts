import { EventEmitter } from "events";
import { AppSettings, FontSettings } from "./settings";

export function createSettingsProxy<T extends (AppSettings | FontSettings)>(
    source: Partial<T>,
    defaults: T,
    eventTarget: EventEmitter
): T {
    return new Proxy<T>(
        defaults,
        {
            get: (o: T, key: keyof T, recv) => {
                if (key in source) return source[key]
                return defaults[key]
            },
            set: (o: T, key: keyof T, value: T[keyof T], recv): boolean => {
                source[key] = value
                eventTarget.emit(
                    "settingChanged", key
                )

                return true
            },
            deleteProperty: (o: T, key: keyof T): boolean => {
                if (key in source)
                    delete source[key]

                return true
            }
        }
    )
}