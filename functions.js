/* 1. Напишіть функцію, яка приймає два числа і повертає їх суму.*/

function sum(a, b) {
   
  let c = a + b
    
    return c
}
sum(5, 3)



/*2. Напишіть функцію, яка приймає рядок і повертає його в верхньому регістрі.*/

function toUpperCase(string) {
  
    return string.toUpperCase();
}
console.log(toUpperCase("hello"));

/*3. Напишіть функцію, яка приймає масив чисел і повертає новий масив з квадратами цих чисел.*/

const myArray = [1, 2, 3, 4]
const newArray = myArray.map(el => el * el)
console.log(newArray)