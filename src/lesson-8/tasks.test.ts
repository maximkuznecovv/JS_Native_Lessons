import {
    doubleSum,
    getBanknoteList,
    getSum,
    getTriangleType,
    isEvenIndexSumGreater,
    IsSquareGreater,
    sum
} from "./tasks";

test("get sum of numbers", () => {
    expect(sum(1, 3, 4, 5, 6)).toBe(19)
    expect(sum(1, 2, 3)).toBe(6)
})

test("get sum", () => {
    expect(doubleSum('yo', true, 1, 3, 4, 5, 6)).toBe(19)
})

test("get Triangle Type", () => {
    expect(getTriangleType(2, 3, 3)).toBe("01")
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(4, 5, 3)).toBe("11")
    expect(getTriangleType(10, 2, 2)).toBe("00")
})

test("get Sum", () => {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})

test("Is Even Sum Greater", () => {
    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 300, 4])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 4])).toBe(true)
})


test("Is Square Greater Than Circle", () => {
    const sCr = 3.14
    const sSq = 4
    const result = IsSquareGreater(sCr, sSq)
    expect(result).toBe(true)
})

test("get banknote list", () => {
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)
})

