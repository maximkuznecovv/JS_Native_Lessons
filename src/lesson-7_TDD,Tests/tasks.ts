import exp from "constants";

export function sum(a: number, b: number) {
return a + b
}
export function restParams(...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc + el)
}

//TDD
export type StudentType = {
    name: string
    isStudent: boolean
    friends: string[] // or Array<string>
}

export type StudentsType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
    friends: string[] // or Array<string>
}


export const copyStudent = (st: StudentType) => ({...st})
export const deepCopyStudent = (st: StudentType) => ({...st, friends: [...st.friends]})

// 'sum', 'mult', 'div', 'sub'
export function calc(a: number, b: number, action: string) {
/*if (action === 'sum') {
    return a + b
} else if (action === 'mult') {
    return a * b
} else if (action === 'div') {
    return a / b
} else if (action === 'sub') {
    return a - b
}*/
    switch (action) {
        case "sum":
            return a + b
        case "mult":
            return a * b
        case "div":
            return a / b
        case "sub":
            return a - b
        default:
            return 'Unknown type action'
    }
}

export const addFriends = (students: Array<StudentsType>) => students.map(st => ({
    ...st,
    friends: students
        .map(s => s.name)
        .filter(n => n !== st.name)
}))

