import { isElementVisible } from './utils'

const useTransform = ( domElement, intensity = 1 ) => {
    if ( !domElement ) { return }
    if ( !isElementVisible( domElement ).partable.y ) { return }
    const scrollY = window.scrollY
    domElement.style.cssText = `
        will-change: transform;
        transform: translate3d(${scrollY / 100 * intensity}px, 0, 0);
    `
    console.log(scrollY)
}

export { useTransform }