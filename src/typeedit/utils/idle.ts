export function setIdleTimeout(
    handler: (e: MouseEvent) => void,
    cancel: () => void,
    msec: number
) {
    let timeout: any = 0

    addEventListener("mousemove", (e) => {
        if (timeout) {
            clearTimeout(timeout)
            cancel()
        }
        timeout = setTimeout(
            () => handler(e),
            msec
        )
    })
}