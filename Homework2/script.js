// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс 
// "super-dropdown", необходимо использовать методы forEach и querySelectorAll 
// и свойство classList у элементов.
// []()
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", 
// если он присутствует у этого элемента, либо добавить, 
// если такого класса у элемента не было.
// []()
// 3. Необходимо удалить класс "dropdown-menu" у элемента, 
// у которого присутствует класс "menu".
// []()
// 4. Используя метод insertAdjacentHTML добавьте после div'a 
// с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// []()
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// []()
// 6. Добавьте атрибут data-dd со значением 3 элементу у 
// которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// []()
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

// 1
const dropdownItems = document.querySelectorAll(".dropdown-item")
dropdownItems.forEach((element) => {
    element.classList.add("super-dropdown")
})

// 2
const btn = document.querySelector('.btn')
btn.classList.toggle("btn-secondary")

// 3
const menu = document.querySelector('.menu')
menu.classList.remove("dropdown-menu")

// 4
const divs = document.querySelectorAll('div')
divs.forEach((element) => {
    if (element.classList.contains('dropdown')) {
        element.insertAdjacentHTML('afterend', `<a href="#">link</a>`)
    }
})

// 5
const dropdownMenuButton = document.querySelector('#dropdownMenuButton')
dropdownMenuButton.id = "superDropdown"

// 6
const aria_labelledby = document.querySelector('[aria-labelledby="dropdownMenuButton"]')
aria_labelledby.dataset['dd'] = "3"

// 7
const dropdown_toggle = document.querySelector('.dropdown-toggle')
dropdown_toggle.removeAttribute('type')