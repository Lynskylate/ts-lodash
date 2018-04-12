const INFINITY = 1 / 0
const MAX_INTEGER = 1.7976931348623157e+308

export function toFinite(value: number|null|undefined|string){
    if(value === null || typeof value === 'undefined') return 0
    const number_value:Number = Number(value)
    if(value === INFINITY || value === -INFINITY){
        const sign = value>0?1:-1
        return sign*MAX_INTEGER
    }
    return number_value
}
