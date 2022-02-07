//------------------------------------------------------------
const originalArray = [23, 43, 12, 32, 65, 777, 82, 21, 0, 99]
const array = [...originalArray]

//------------------------------------------------------------
// ПУЗЫРЬКОВАЯ СОРТИРОВКА
for (let j = 0; j < array.length; j++) {
    let sort = true;
    for (let i = 0; i < array.length - j; i++) {
        if (array[i] > array[i + 1]) {
            sort = false; // todo !!! НУЖНО СТАВИТЬ ТОЧКУ С ЗАПЯТОЙ, ЕСЛИ С НОВОЙ СТРОЧКИ НАЧИНАЕТСЯ ЛИТЕРАЛ МАССИВА !!! Вопрос для влада. Почему интерпритатор соединяет обе сторчки если не ставить запятую
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            // let temp = array[i + 1]
            // array[i + 1] = array[i]
            // array[i] = temp
        }
    }
    if (sort) {
        break
    }
}
console.log(array)

//------------------------------------------------------------

const mySort = (arr) => {
    let resultArr = []
    do {
        let minValue = Math.min(...arr)
        resultArr.push(minValue)
        arr.splice(arr.indexOf(minValue), 1)
    } while (arr.length !== 0)
    console.log(resultArr)
}
mySort(array)
console.log(array)
//------------------------------------------------------------
const array1 = [...originalArray]
let newArray = []

const sort = (array) => {
    let arrLength = array.length
    for (let i = 0; i < arrLength && array.length > 0; i++) {
        let minValue = array.reduce((acc, el) => {
            return acc < el ? acc : el
        })
        newArray.push(minValue)
        array = array.filter(e => e !== minValue)
    }
    return (newArray)
}
console.log(sort(array1))
console.log(newArray)

//==================================================================================================

// Array.prototype.sort()

const names = ['Bob', 'Alex', 'Ramzan', 'Donald', 'duck', '999', 'Игорь']
console.log(names.sort())

const numbers = [100, 1000, 90, 2]

//------------------------------------------------------------

const compareFn = (a, b) => a - b
console.log(numbers.sort(compareFn))
console.log(numbers.sort(compareFn).reverse())

// function compareFn(a, b) {
//     if (a <= b) {
//         return -1
//     } else {
//         return 0
//     }
// }

//------------------------------------------------------------

let students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: 'bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: 'Alex',
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: 'alex',
        age: 23,
        isMarried: true,
        scores: 19
    },
    {
        name: 'Helge',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 321
    },
    {
        name: 'nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
];

//------------------------------------------------------------

console.log([...students].sort((a, b) => a.scores - b.scores))
console.log([...students].sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
console.log([...students].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
console.log([...students].sort((a, b) => a.name < b.name ? -1 : 1))
console.log([...students].sort((a, b) => a.age - b.age))
console.log([...students].sort((a) => !a.isMarried ? -1 : 1))
console.log([...students].sort((a) => a.isMarried ? -1 : 1))
