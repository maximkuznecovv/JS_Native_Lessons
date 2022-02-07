const todoListID1 = '12ds-3242f'
const todoListID2 = '22ds-3142f'

const todoList = [
    {
        id: todoListID1,
        title: 'What to buy',
        filter: 'all',
        tasks: [
            {id: 1, title: 'Milk', isDone: false}
        ]
    },
    {
        id: todoListID2,
        title: 'What to learn',
        filter: 'all',
        tasks: [
            {id: 2, title: 'js', isDone: false}
        ]
    },
]
const tasks = {
    [todoListID1]: [
        {id: 1, title: 'Milk', isDone: false},
        {id: 2, title: 'bread', isDone: false},
        {id: 3, title: 'beer', isDone: false}
    ],
    [todoListID2]: [
        {id: 2, title: 'js', isDone: false}
    ]
}

//
const propName = 'age' // [] square bracket notation
const obj = { // new object(...)
    'user name': 'Bob',
    [propName]: 26,
}

console.log(obj['user name'])
console.log(obj[propName])

console.log(tasks[todoListID1])
console.log(todoList.find(t => t.id === todoListID1))

/*const students = {
    0: 'Alex',
    1: 'Dmitriy',
    2: 'Bob',
    3: 'Nick',
}*/
/*console.log(students[0])*/

// Reduce
const numbers = [23, 45, 56, 46, 67, 87];

const average = numbers.reduce((acc, el) => acc + el, 0) / numbers.length
console.log(average)

let studentsR = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// Reduce
console.log(studentsR.reduce((acc, el) => el.scores + acc, 0))
console.log(numbers.reduce((acc, el) => el > acc ? acc : el))

const findAlex = (acc, el) => {
    if (el.name === 'Alex') {
        acc = el
    }
    return acc
}
console.log(studentsR.reduce(findAlex, null))

// Самописный filter
const filterAlex = (acc, el) => {
    if (el.name === 'Alex') {
        acc.push(el)
    }
    return acc
}
console.log(studentsR.reduce(filterAlex, []))

console.log(studentsR.reduce((newArr, el) => {
    if (!el.isMarried) {
        newArr.push(el)
        // return newArr
    }
    return newArr
}, []))

// Глубокая копия обьекта
console.log(studentsR.reduce((newArr, el) => {
    newArr.push({...el})
    return newArr
}, []))

/* Два нижних примера формируют из studentsR в data с помощью reduce и цикла for
let data = { //data формируется из reduce
    Alex: [21, 89, true],
    Bob: [22, 85, true],
    John: [19, 100, false],
    Nick: [20, 120, false],
}*/
console.log(studentsR.reduce((obj, st) => {
        obj[st.name] = [st.age, st.scores, st.isMarried] //инициализация свойства значения путем присвоения значения
        return obj
    }, {})
)

let data = {}
for (let i = 0; i < studentsR.length; i++) {
    data[studentsR[i].name] = [studentsR[i].age, studentsR[i].scores, studentsR[i].isMarried] //инициализация свойства значения путем присвоения значения
}
console.log(data)

// Напишите алгоритм, который берет массив и перемещает все нули в конец,
// сохраняя порядок других элементов.
let moveZeros = (arr) => arr.reduceRight((acc, val) => val === 0 ? [...acc, val] : [val, ...acc], [])

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])) // return [false, 1, 1, 2, 1, 3, 'a', 0, 0]

// Разворачивание массивов
let flattened = [[0, 1], [2, 3], [4, 5, 6]].reduce((a, b) => a.concat(b)) // [0, 1, 2, 3, 4, 5, 6]
let flattened1 = [[0, 1], [2, 3], [4, 5, 6]].reduce((a, b) => [...a, ...b]) // [0, 1, 2, 3, 4, 5, 6]
console.log(flattened, flattened1) // вместо двух console.log

// Если дан двумерный массив целых чисел, верните выровненную версию массива
//  со всеми целыми числами в отсортированном (возрастающем) порядке.
// Пример: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]],
// ваша функция должна вернуть [1, 2, 3, 4, 5, 6, 7, 8, 9].
const flattenAndSort = (array) => {
    return array
        .reduce((result, current) => [...result, ...current], [])
        .sort((a, b) => a - b)
}
console.log(flattenAndSort([[4, 6, 5], [3, 2, 1], [], [9, 7, 8]])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Полифил для ForEach
let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18]

Array.prototype.forEach2 = function (callback) {
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

arr.forEach2((item, index, array) => {
    console.log({item, index})
})
// {item: 10, index: 0}
// {item: 11, index: 1}...

// Полифил для Reduce
Array.prototype.reduce2 = function (f, result) {
    let i = 0

    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for (; i < this.length; i++) {
        result = f(result, this[i], i, this)
    }
    return result
}

let a = [1, 2, 3, 4]

function add(a, b) {
    return a + b;
}

function concatenate(a, b) {
    return a.concat(b);
}

console.log(a.reduce(add), a.reduce2(add)) // 10 10
console.log(a.reduce(add, 10), a.reduce2(add, 10)) // 20 20
console.log(a.reduce(concatenate, 'x'), a.reduce2(concatenate, 'x')) // x1234 x1234

// Сумма чисел
// ...Циклом for
let b = [1, 2, 3, 4]
let sum = 0
for (let i = 0; i < b.length; i++) {
    sum += b[i];
}
// ...редюсом
let c = b.reduce((a, b) => {
    return a + b
}, 0)
console.log(sum, c) // 10 10
// Максимальное значение
// ...Циклом for
let d = [3, 1, 2, 5, 1, 22, 4]

let max = d[0]
for (let i = 0; i < d.length; i++) {
    if (d[i] > max) {
        max = d[i]
    }
}
// ...редюсом
console.log(max, d.reduce((a, b) => a < b ? b : a, d[0])) // 22 22

// Индекс максимального элемента
// ...Циклом for
max = d[0]
let index = 0
for (let i = 0; i < d.length; i++) {
    if (d[i] > max) {
        max = d[i]
        index = i
    }
}
console.log(index)
// ...редюсом
console.log(d.reduce((prev, item, index) => item > prev[1] ? [index, item] : prev, [0, d[0]]))

// Найти сумму положительных чисел
const sumPlus = [-1, -3, 4, -5, 7, -6, 2]
console.log(sumPlus.reduce((acc, item) => {
    if (item > 0) {
        acc += item
    }
    return acc
}, 0))

// Переиндексация массива
const myArr = [
    {id: 55, city: 'arc'},
    {id: 75, city: 'rca'},
    {id: 175, city: 'bra'},
]
console.log(myArr.reduce((acc, item) => { // Нужно вернуть [55, 75, 175]
    acc.push(item.id)
    return acc
}, []))

// Аналог reduce (схематичный)
// let res = '';
// for () {
//     res +=
// }
