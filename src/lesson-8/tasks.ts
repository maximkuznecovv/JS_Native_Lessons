/*1. Функция  sum принимает параметром целые положительные числа (неопределеннное к-во), и возвращает их сумму*/

export let sum = (...numbers: number[]): number => {
    return numbers.reduce((acc, el) => acc + el)
}

export let doubleSum = (a: string, b: boolean, ...numbers: number[]): number => {
    return numbers.reduce((acc, el) => acc + el)
}

/*2. Функция getTriangleType принимает три параметра:
 длины сторон треугольника.
 Ф-я должна возвращать:
 - "01", если треуголник равнобедренный,
 - "10", если треуголник равносторонний,
 - "11", если треуголник обычный,
 - "00", если такого треуголника не существует.*/

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && b === c) {
            return "10"
        } else if (a === b || b === c || c === a) {
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
}

// 3. Функция getSum принимает параметром целое число и возвращает сумму цифр этого числа

// 1 варик
/*export function getSum (number: number): number{
    return number.toString().split('').reduce((acc, el) => acc + +el, 0) // через Number(el) более наглядней, читабельнее
}*/

// export function getSum(number: number): number {
//     return number
//         .toString()
//         .split("")
//         .reduce((acc, el) => acc + Number(el), 0) // +el
// }

// // 2 варик
// export function getSum(a: number) {
//     let temp = a.toString()
//     let sum = 0
//     for (let i = 0; i < temp.length; i++) {
//         const res = temp.charAt(i)
//         sum += +res
//     }
//     return sum
// }

// // 3 варик
// export function getSum(number: number) {
//     let sum = 0
//     for (; number > 0; number = Math.trunc(number / 10)) {
//         sum += number % 10
//     }
//     return sum
// }

// 4 варик
export const getSum = (arg: number) => eval(arg.toString().replace(/(\d)(?=\d)/g, "$1+"))


// 4, Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с четным индексом (0 как четный индекс) больше суммы с нечетным индексом,
// то ф-я возвращает true. Впротивном случае - false.
// 1 варик
// export function isEvenIndexSumGreater(array: number[]) {
//     let odd = 0
//     let even = 0
//     for (let i = 0; i < array.length; i++){
//         if (i % 2 === 0){
//             even += array[i]
//         } else {
//             odd += array[i]
//         }
//     }
//     return even > odd
// }

// 2 варик
export const isEvenIndexSumGreater = (arr: number[]): boolean => {
    const sums: number[] = arr.reduce((acc, el, i) => {
        acc[i % 2] += el
        return acc
    }, [0, 0])
    return sums[0] > sums[1]
}

// 5. Функция isSquareGreater  принимает два параметра: площадь круга и площадь квадрата. Ф-я должна возвращать true если круг поместиться в квадрат и false в противном случае.

// 1 варик
// export const IsSquareGreater = (sCr: number, sSq: number): boolean => (sCr/sSq <= Math.PI/4) ? true : false

// 2 варик
export const IsSquareGreater = (sCr: number, sSq: number): boolean => Math.sqrt(sSq / Math.PI) >= (Math.sqrt(sCr) / 2)

// 6. Функция - банкомат принимает параметром целое натуральное число (сумму). Возвращает массив с наименьшим кол-ом купюр, которым можно выдать эту сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
// !!! нужно пробегаться циклом по массиву банкнот, и добавлять нужную банкноту в массив, если сумма меньше или равна этой банкноте

export function getBanknoteList(amountOfMoney: number): number[] {
    let copyAmount = amountOfMoney
    let newArray: number[] = []
    while (copyAmount > 0)
        if (copyAmount >= 1000) {
            newArray = [...newArray, 1000]
            copyAmount -= 1000
        } else if (copyAmount >= 500) {
            newArray = [...newArray, 500]
            copyAmount -= 500
        } else if (copyAmount >= 100) {
            newArray = [...newArray, 100]
            copyAmount -= 100
        } else if (copyAmount >= 50) {
            newArray = [...newArray, 50]
            copyAmount -= 50
        } else if (copyAmount >= 20) {
            newArray = [...newArray, 20]
            copyAmount -= 20
        } else if (copyAmount >= 10) {
            newArray = [...newArray, 10]
            copyAmount -= 10
        } else if (copyAmount >= 5) {
            newArray = [...newArray, 5]
            copyAmount -= 5
        } else if (copyAmount >= 2) {
            newArray = [...newArray, 2]
            copyAmount -= 2
        } else if (copyAmount >= 1) {
            newArray = [...newArray, 1]
            copyAmount -= 1
        } else {
            return newArray
        }
    return newArray
}