import makeClassName, {TObject} from "helpers/makeClassName";
import {useMemo} from "react";

/**
 * Memoized hook implementation of {@link makeClassName} helper function
 * @param className
 * @param object
 * @param deps
 * @return string
 */
export default function useMakeClassName(
    className: string,
    object: TObject | null = null,
    deps = []
): string {
    return useMemo(() => {
        return makeClassName(className, object)
    }, [...deps])
}
