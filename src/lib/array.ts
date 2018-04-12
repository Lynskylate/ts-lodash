import { deepCopy } from './.utils/copy'

export function chunk<T>(arr: Array<T> | null | undefined, size: number): T[][] {
    if (arr == null || arr.length === 0) {
        return []
    }
    let out: T[][] = [[], []]
    for (let i = 0; i < size; i++) {
        out[0].push(arr[i])
    }
    for (let i = size; i < arr.length; i++) {
        out[1].push(arr[i])
    }
    return out
}

export function compact<T>(arr: ArrayLike<T> | null | undefined): Array<T> {
    if (arr === null || typeof arr === 'undefined')
        return []
    return Array.from(arr).filter((item) => item)
}

export function concat<T>(arr: Array<T> | null | undefined, ...args: T[]): T[] {
    let result: T[] = []
    if (arr === null || typeof arr === 'undefined') {
        return []
    }
    for (const item of arr) {
        result.push(item);
    }
    args.forEach((value) => {
        Array.isArray(value) ? result.push(...value) : result.push(value)
    })
    return result;
}

export function difference<T>(arr: ArrayLike<T> | null | undefined,
    ...values: Array<Array<T>>): T[] {

    if (arr === null || typeof arr === 'undefined') return []

    let diff: Array<T> = deepCopy(arr)
    values.forEach((value) => {
        for (const ele of value) {
            let e_index = diff.indexOf(ele)
            if (e_index >= 0) {
                diff.splice(e_index, 1)
            }
        }
    })
    return diff
}