import { toFinite } from "./baseoperate";

export default function baseRange(start: number, end: number,
     step: number, fromRight: boolean) {
    let index:number = -1
    let length:number = Math.max(Math.ceil((end - start) / (step || 1)), 0)
    const result = new Array(length)

    while (length--) {
        result[fromRight ? length : ++index] = start
        start += step
    }
    return result
}

export function createRange(fromRight:boolean):Function {
    return (start, end, step) => {
      start = toFinite(start)
      if (end === undefined) {
        end = start
        start = 0
      } else {
        end = toFinite(end)
      }
      step = step === undefined ? (start < end ? 1 : -1) : toFinite(step)
      return baseRange(start, end, step, fromRight)
    }
  }