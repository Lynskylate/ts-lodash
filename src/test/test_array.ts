import {expect} from 'chai'
import * as _array from "../lib/array"

describe('test array',function(){
    it(
        'compact()',function(){
            expect(_array.compact([0, 1, false, 2, '', 3])).eql([1, 2, 3])
        }
    )
    it(
        'chunk()', function(){
            expect(_array.chunk(['a','b','c','d'],2)).eql([['a', 'b'], ['c', 'd']])
            expect(_array.chunk(['a','b','c','d'],3)).eql([['a', 'b' , 'c'], ['d']])
        }
    )
    it(
        'concat()', function(){
            expect(_array.concat<any>([1], 2, [3], [[4]])).eql([1, 2, 3, [4]]);
        }
    )
    it(
        'difference()', function(){
            expect(_array.difference([2, 1], [2, 3])).eql([1])
        }
    )
})