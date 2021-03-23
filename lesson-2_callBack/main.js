const test = () => 'test';

// function text2() {
//     return 'test'
// }

// 1. Передача функции в качестве callBack'a
// - Передача литерала
// - Передача имени функции
console.log(test)
console.log(() => 'test')

// 2. Передача результата функции
console.log(test())
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// students.map(callBackFn)

function selfMadeMap(array, callBackFn) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr[i] = callBackFn(array[i]);
    }
    return newArr;
}

// Добавить каждому студенту 10 баллов

// const addScore = (st) => ({...st, scores: st.scores + 10})

function addScore(st) {
    const stCopy = {...st}
    stCopy.scores = st.scores + 10;
    return stCopy
}

console.log(selfMadeMap(students, addScore))
console.log(selfMadeMap(students, (st) => ({...st, scores: st.scores + 10})))
console.log(students.map(addScore))

console.log(selfMadeMap(students, (st) => ({...st, age: st.age + 1})))

function selfMadeFilter(array, callBackFn) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (callBackFn(array[i])) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

const bestStudent = selfMadeFilter(students, st => st.scores >= 100)
console.log(bestStudent)
const notMarriedSt = selfMadeFilter(students, st => !st.isMarried)
console.log(notMarriedSt)
const marriedSt = selfMadeFilter(students, st => st.isMarried)
console.log(marriedSt)
// const bob = selfMadeFilter(students, st => st.name.toLowerCase() === 'bob')
// console.log(bob)

function doubleFilter(array, callBackFn) {
    const firstArr = [];
    const secondArr = [];
    for (let i = 0; i < array.length; i++) {
        if (callBackFn(array[i])) {
            firstArr.push(array[i]);
        } else {
            secondArr.push(array[i]);
        }
    }
    return {firstArr, secondArr}
}

console.log(doubleFilter(students, st => st.isMarried))

function selfMadeFind(array, callBackFn) {
    for (let i = 0; i < array.length; i++) {
        if (callBackFn(array[i])) {
            return array[i];
        }
    }
}

const bob = selfMadeFind(students, st => st.name === 'bob')
console.log(bob)