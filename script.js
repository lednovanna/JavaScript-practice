/* 1.Створіть змінну, яка зберігає ім'я користувача. Виведіть значення цієї змінної в консоль.*/

 let usersName = "Anna";
console.log(usersName);

/*2. Створіть змінну, яка зберігає вік користувача. Перетворіть цю змінну на рядок і виведіть тип цієї змінної в консоль.*/


let userAge = "35";
let userAgeString = String(userAge);
console.log(typeof userAgeString);

/*3. Створіть змінну, яка зберігає число "10" і додайте до нього рядок "20". Виведіть результат і його тип. */

let number = 10;
let result = number + String(20);//let result = number + "20";
console.log(typeof result);
console.log(result);