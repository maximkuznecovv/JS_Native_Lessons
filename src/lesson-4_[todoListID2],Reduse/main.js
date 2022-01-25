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

console.log(studentsR.reduce((acc, el) => el.scores + acc, 0))
console.log(numbers.reduce((acc, el) => el > acc ? acc : el))

const findAlex = (acc, el) => {
    if (el.name === 'Alex') {
        acc = el
    }
    return acc
}

console.log(studentsR.reduce(findAlex, null))

const filterAlex = (acc, el) => {
    if (el.name === 'Alex') {
        acc.push(el)
    }
    return acc
}

console.log(studentsR.reduce(filterAlex, []))

console.log(studentsR.reduce((data, st) => {
        data[st.name] = [st.age, st.scores, st.isMarried]
        return data
    }, {})
)