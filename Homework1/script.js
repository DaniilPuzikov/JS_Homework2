// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
// 5. Выведите содержимое тега title в консоль.
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// 8. Удалите тег h6 на странице.

// 1
const super_link = document.getElementById("super_link")
console.log(super_link)

// 2
const card_link = document.querySelectorAll('.card-link')
card_link.forEach(element => {
    element.textContent = 'Ссылка'
});

// 3
const card_body = document.querySelector('.card-body')
const card_link2 = card_body.querySelectorAll('.card-link')
console.log(card_link2)

// 4
const data_number = document.querySelector('[data-number="50"')
console.log(data_number)

// 5
const title = document.querySelector('title')
console.log(title.textContent)

// 6
const card_title = document.querySelector('.card-title')
console.log(card_title.parentNode)

// 7
const card = document.querySelector('.card')
const p = document.createElement('p')
p.textContent = 'Привет'
card.insertBefore(p, card.firstChild)

// 8
const h6 = document.querySelector('h6')
h6.remove()