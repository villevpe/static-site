import scrollIntoView from 'scroll-into-view'

export const scrollElementIntoView = (id: string) => {
    if (document) {
        const element = document.getElementById(id)
        return scrollIntoView(element, {
            time: 700,
            align: { top: 1 }
        })
    }
}

export const isMobileViewPort = () => {
    if (document) {
        return document.documentElement.clientWidth <= 768
    }
    return false
}
