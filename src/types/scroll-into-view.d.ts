declare module 'scroll-into-view' {
    export interface Options {
        time?: number
        align?: {
            top?: number
            left?: number
            topOffset?: number
            leftOffset?: number
        }
    }

    export default function(element: HTMLElement, options: Options): void
}