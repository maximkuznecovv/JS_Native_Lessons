// const student = {
//     name: 'bob',
//     age: 18,
//     friends: ['alex', 'helen', 'donald']
// }
//
// // Поверхностная копия
// const studentCopy = {...student}
//
// console.log(student === studentCopy) //false
// studentCopy.name = 'Den'
//
// console.log(student) //{name: "bob",...}
//
//
// //Глубокая копия
// const studentDeepCopy = {...student, friends: [...student.friends]}
//
// console.log(student.name === studentDeepCopy.name) // true
// console.log(student.friends === studentDeepCopy.friends) // false
// console.log(student.friends[0] === studentDeepCopy.friends[0]) // true
// console.log(student === studentDeepCopy) // false
//
//
// // 2
//
// function myFunc(a) {
//     const b = () => console.log(a);
//     return [a, b]
// }
//
// const result = myFunc(10)
// console.log(result)
//
// // const num = result[0];
// // const fn = result[1];
//
// // const [num, fn] = result;
// // console.log(num, fn);
//
// const [num, fn] = myFunc(10) // [10, () => console.log(a)]
// console.log(num, fn);
//
// // 3.
//
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
// students.map()
//
//
function sumToByLoop(n) {

    let result = 0;
    for (let i = n; i > 0 ; i--) {
        result += i
    }
    return result;
}

console.log(sumToByLoop(3));