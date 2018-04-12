import { expect } from 'chai'
import * as _array from "../lib/array"

describe('test array', function () {
    it(
        'compact()', function () {
            expect(_array.compact([0, 1, false, 2, '', 3])).eql([1, 2, 3])
        }
    )
    it(
        'chunk()', function () {
            expect(_array.chunk(['a', 'b', 'c', 'd'], 2)).eql([['a', 'b'], ['c', 'd']])
            expect(_array.chunk(['a', 'b', 'c', 'd'], 3)).eql([['a', 'b', 'c'], ['d']])
        }
    )
    it(
        'concat()', function () {
            expect(_array.concat<any>([1], 2, [3], [[4]])).eql([1, 2, 3, [4]]);
        }
    )
    it(
        'difference()', function () {
            expect(_array.difference([2, 1], [2, 3])).eql([1])
        }
    )
    it(
        'drop()', function () {
            expect(_array.drop([1, 2, 3])).eql([2, 3])
            expect(_array.drop([1, 2, 3], 2)).eql([3])
            expect(_array.drop([1, 2, 3], 5)).eql([])
        }
    )
    it(
        'dropRight()', function () {
            expect(_array.dropRight([1, 2, 3])).eql([1, 2])
            expect(_array.dropRight([1, 2, 3], 2)).eql([1])
            expect(_array.dropRight([1, 2, 3], 5)).eql([])
        }
    )
    it(
        'flatten()', function () {
            expect(_array.flatten([1, [2, [3, [4]], 5]])).eql([1, 2, [3, [4]], 5])
        }
    )
    it(
        'flattenDeep()', function(){
            expect(_array.flattenDeep([1, [2, [3, [4]], 5]])).eql([1, 2, 3, 4, 5])
        }
    )
    it(
        'flattenDepth()', function(){
            expect(_array.flattenDepth([1, [2, [3, [4]], 5]])).eql([1, 2, [3, [4]], 5])
        }
    )
})