const array = [23, 43, 12, 32, 65, 777, 82, 21, 0, 99]

for (let j = 0; j < array.length; j++) {
    let sort = true;
    for (let i = 0; i < array.length - j; i++) {
        if (array[i] > array[i + 1]) {
            sort = false; //todo Вопрос для влада. Почему интерпритатор соединяет обе сторчки если не ставить запятую
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

// Array.prototype.sort()

const names = ['Bob', 'Alex', 'Ramzan', 'Donald', 'duck', '999', 'Игорь']
console.log(names.sort())

const numbers = [100, 1000, 90, 2]

const compareFn = (a, b) => a - b
console.log(numbers.sort(compareFn))

// function compareFn(a, b) {
//     if (a <= b) {
//         return -1
//     } else {
//         return 0
//     }
// }

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
];

console.log(students.sort((a, b) => a.scores - b.scores))
console.log(students.sort((a, b) => b.age - a.age))
console.log(students.sort((a, b) => a.name < b.name ? -1 : 1))
console.log(students.sort((a) => !a.isMarried ? -1 : 1))
