// 1. Событие -> Event
// 2. Есть ли обработчик -> handler, слушатель Listener, подписчик, subscriber.
// 3. Вызов обработчика
// 4. Передача объекта (event, ev, e) в обработчик в качестве параметра

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
const input = document.getElementById('input')

/*function onClickHandler (e) {
    e.target.parentElement.parentElement.style.backgroundColor = 'black'
}*/

function onClickHandler (e) {
    console.log(e.currentTarget.id)
    e.stopPropagation() // Не идти дальше по дереву
}

sm.onclick = onClickHandler
md.onclick = onClickHandler
bg.onclick = onClickHandler

function onChange(e) {

    console.dir(e.target)
}

input.onchange = onChange
// e.target - элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget - элемент, который вызвал обработчикв процессе всплытия события
// e.stopPropagation() - останавливает всплытие события