window.onload = () => {
    // 2) Підключити скрипт і зробити виборку li елементи в списку
    let liElements = document.querySelectorAll('li');
    console.log(liElements);

    // 3) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу
// вивести в консоль
    let parentLi = document.querySelector('li').parentNode;
    console.log(parentLi)

// 4) Зробити цикл який знаходить  nextElementSibling після active в списку і додає їх в новий массив
let sibling = document.querySelector('.active').nextElementSibling;
let [...children] = document.querySelector('.menu-list').children
let arr = [];
for(let i of children){
    if(i == sibling){
        arr.push(i.innerHTML)
    }
}
console.log(arr)

// 5) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
class AddFilm {
    constructor(year, genre, name, numViews){
        this.year = year;
        this.genre = genre;
        this.name = name;
        this.numViews = numViews;
    }

}
// 6) За допомогою деструктурізації переберіть массив створених обєктів фільму і виведіть значення по року випуску фільму  

let filmOne = new AddFilm(2003, 'Боевик', 'Пираты карибского моря', 92990004);
let filmTwo = new AddFilm(1972, 'Триллер', 'Крёстный отец', 3425455404);
let filmThree = new AddFilm(1991, 'Фантастика', 'Терминатор', 93435345223204);

let films = [filmOne, filmTwo, filmThree];

function sortByYear(arr){
        return [...arr].sort((a, b) => a.year - b.year);
    }
console.log(sortByYear(films))

// 7) створіть такуж функцію але яка сортує по кількості переглядів
function sortByViews(arr){
    return [...arr].sort((a, b) => a.views - b.views);
}
console.log(sortByViews(films))


// 8) В html виберіть header, footer, nav  та обєднайте отримані селектори в 1 массив
let [...tagElments] = document.querySelectorAll('header, footer, nav');
console.log(tagElments)


// 9) Самостійно опрацюйте можливості виборки череp querySelector
let figZnaet = document.querySelector('ul li:nth-child(3)'); 
console.log(figZnaet, 'найден с помощью querySelector')
}