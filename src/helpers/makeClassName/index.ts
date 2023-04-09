
/**
 * Generate class name string from multiple class names
 * @param className
 * @param object Determines if className (key) is added into return string by condition (value) - [className]: condition
 * @returns {string}
 */
export default function makeClassName(className: string, object: TObject|null = null): string {
    if(!object) return className

    const modifierClasses = Object.keys(object).filter(k => object[k])
    if (modifierClasses.length)
        return [
            className,
            ...modifierClasses
        ].filter(c => c).join(' ')
    return `${className}`
}

export type TObject = {
    [key: string]: any,
}
