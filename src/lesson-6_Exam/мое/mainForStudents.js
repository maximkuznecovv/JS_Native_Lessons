const students = [
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
        scores: 90
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: 'Helen',
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: 'Ann',
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Nick', 'John']
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
console.log(copyUser === user)
console.log(copyUser.friends === user.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
console.log(deepCopyUser === user)
console.log(deepCopyUser.friends === user.friends)

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(students === copyStudents)
console.log(students[0].name === copyStudents[0].name)

//4. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(s => ({...s}));

//Проверка:
deepCopyStudents[0].name = 'max'

console.log(students === deepCopyStudents)
console.log(students[0].name === deepCopyStudents[0].name)

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortByName = [...deepCopyStudents].sort((a, b) => a.name <= b.name ? -1 : 1);
console.log(sortByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log(sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)

let bestStudents = deepCopyStudents.filter(s => s.scores >= 100);
console.log(bestStudents)

// 6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-опреатор )
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(hol => !hol.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(s => s.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - запятой (join)
// - пробелом (join)
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(', ');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = [...students].map(s => ({...s, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(s => s.name === 'Ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = students.reduce((acc, index) => acc.scores > index.scores ? acc : index);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = [...students].reduce((acc, i) => acc + i.scores, 0);
console.log(scoresSum)

/*
 14.Напишите функцию addFriends, которая принимает параметром массив students
 и добавляет в каждому студенту свойство "friends",
 значением которого является массив имён всех остальных студентов из массива,
 за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

  Логика:
  1 получить массив всех имен (map)
  2 массив студент filter
  3 кажд ст добавить св-во френд со знач отфильтр массив
*/

//=======================================================================

// 1 вариант решения:
const addFriends = (students) => {
    return students.map(st => {
        let friend = students.map(s => s.name).filter(n => n !== st.name)
        return {...st, friend: friend}
    })
}
console.log(addFriends(students));

//=======================================================================

/*// 2 вариант решения:
const addFriends = students => students.map(st => ({
    ...st,
    friends: students
        .map(s => s.name)
        .filter(n => n !== st.name)
}))
console.log(addFriends(students))*/

//=======================================================================

/*// 3 вариант решения:
const addFriends = (students) => {
    return students.map(st => ({...st, friend: students.map(s => s.name).filter(n => n !== st.name)}))
}
console.log(addFriends(students));*/

//=======================================================================

/*// 4 вариант решения: НЕ РАБОТАЕТ!!!
const addFriends = (students) => {
    students.map( st => ({...st, friends: students.reduce((acc, cur) => {
        cur.name !== st.name ? acc.push(cur.name) : null;
        return acc
    }, [])}))
}
console.log(addFriends(students)) // undefined;*/

//=======================================================================

/*// 5 вариант решения:
const addFriends = (arr) => arr.map(s => (
    {
        ...s,
        friends: arr.reduce((acc, cur) => s.name !== cur.name ?
            [...acc, cur.name]
            :
            [...acc],
            [])
    }
))
console.log(addFriends(students))*/










