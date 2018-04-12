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

export function drop<T>(arr: Array<T> | null | undefined, n?: number | undefined): Array<T> {
    if (arr === null || typeof arr === 'undefined') return []
    if (typeof n === 'undefined') n = 1
    let copy_arry: Array<T> = deepCopy(arr)
    return copy_arry.splice(n)
}

export function  dropRight<T>(arr: Array<T>, n?:number){
    if (arr === null || typeof arr === 'undefined') return []
    if (typeof n === 'undefined') n = 1
    let copy_arry: Array<T> = deepCopy(arr)
    for(let i=0;i<n;i++){
        copy_arry.pop()
    }
    return copy_arry
}

export function flatten(arr: Array<any>):Array<any>{
    let res_array:Array<any> = []
    let copy_arry = deepCopy(arr)
    for(const i of copy_arry){
        Array.isArray(i)?res_array.push(...i):res_array.push(i)
    }
    return res_array
}

export function flattenDeep(arr: Array<any>, result:Array<any> = []){
    for(const i of arr){
        Array.isArray(i)?flattenDeep(i, result):result.push(i)
    }
    return result
}

export function flattenDepth(arr: Array<any>, depth:number = 1, result: Array<any> = []){
    if(depth < 0){
        result.push(arr)
        return
    }

    for(const i of arr){
        Array.isArray(i)?flattenDepth(i, depth-1, result):result.push(i)
    }
    return result
}