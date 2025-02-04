/* 1. Створіть масив з трьох імен. Додайте нове ім'я до кінця масиву і виведіть його.*/

const namesArray = ['Ben', 'Alex', 'John']
namesArray.push('Kai')
const pushedElement = 'Kai';
console.log(namesArray)
console.log(pushedElement)

/* 2. Видаліть перший елемент масиву і виведіть його.*/
const namesArray = ['Ben', 'Alex', 'John']
 const removedElement = namesArray.shift()
 console.log(removedElement)



/* 3. Знайдіть індекс елемента зі значенням "John" в масиві ["Mike", "John", "Sara"]. */
const myArray = ['Mike', 'John', 'Sara']
const index = myArray.indexOf('John');
console.log(index);
