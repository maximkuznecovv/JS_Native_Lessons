import {copyStudent, deepCopyStudent, restParams, StudentsType, StudentType, sum, addFriends, calc} from "./tasks";

let student: StudentType = {
    name: 'Max',
    isStudent: true,
    friends: ['Van', 'Nick', 'Alex']
}

let students: Array<StudentsType> = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
        friends: [],
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 90,
        friends: [],
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
        friends: [],
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
        friends: [],
    },
    {
        name: 'Helen',
        age: 20,
        isMarried: false,
        scores: 110,
        friends: [],
    },
    {
        name: 'Ann',
        age: 20,
        isMarried: false,
        scores: 105,
        friends: [],
    },
];

test ('sum of two numbers', () => {
    //1. Тестовые данные
    const a: number = 6
    const b: number = 8
    //2. Выполнение тестируемого кода с тестовыми данными
    const result = sum(a, b)
     //3. Проверка ожидаемого результата
    expect(result).toBe(14)
})

test ('sum of some numbers', () => {
    //1. Тестовые данные
    const a: number = 6
    const b: number = 8
    const c: number = 10
    const d: number = 2
    //2. Выполнение тестируемого кода с тестовыми данными
    const result2 = restParams(c, d)
    const result3 = restParams(a, b, c, d)
     //3. Проверка ожидаемого результата
    expect(restParams(a, b, c)).toBe(24)
    //expect(restParams(6, 8, 10)).toBe(24)
    expect(result2).toBe(12)
    expect(result3).toBe(26)
})

test ('copyStudent successful done', () => {
    expect(copyStudent(student) === student).toBe(false)
    expect(copyStudent(student).friends === student.friends).toBe(true)
})

test ('deepCopyStudent successful done', () => {
    expect(deepCopyStudent(student) === student).toBe(false) // можно написать toEqual вместо toBe
    expect(deepCopyStudent(student).friends === student.friends).toBe(false)// можно написать toEqual вместо toBe
    expect(deepCopyStudent(student).friends[0] === student.friends[0]).toBe(true)// можно написать toEqual вместо toBe
})

test ('calc test', () => {
    expect(calc(4, 2, 'sum')).toBe(6)
    expect(calc(4, 2, 'mult')).toBe(8)
    expect(calc(4, 2, 'div')).toBe(2)
    expect(calc(4, 2, 'sub')).toBe(2)
})

// addFriends (var 1)
test ('check addFriends', () => {
    let add = addFriends(students)
    expect(add !== students).toBe(true)
    expect(add[0].friends.includes('Bob')).toBe(false)
    expect(add[0].friends.includes('Alex')).toBe(true)
    expect(add[0].name).toBe('Bob')
    expect(add[0].friends.length === 5).toBe(true)
})

// addFriends (var 2)
test ('check addFriends v.2', () => {
    let add = addFriends(students)

    for (let i = 0; i < students.length; i++) {
        // Нет в друзьях себя
        expect(add[i].friends.includes(add[i].name)).toBe(false)
        // По 5 друзей на студента
        expect(add[i].friends.length).toBe(students.length - 1)
        // Друзья разные
        expect(add[i].friends[0] !== add[i].friends[1]).toEqual(true)
    }

    let studentsName = students.map(st => st.name)

    expect(add[0].friends.includes(studentsName[1])).toBe(true)
    expect(add[0].friends.includes(studentsName[2])).toBe(true)

    expect(add[1].friends.includes(studentsName[2])).toBe(true)
    expect(add[1].friends.includes(studentsName[0])).toBe(true)

    expect(add[2].friends.includes(studentsName[0])).toBe(true)
    expect(add[2].friends.includes(studentsName[1])).toBe(true)
})


