/* 1.Створіть асинхронну функцію, яка повертає "Hello, World!" через 1 секунду.

2. Викличте цю функцію і виведіть результат в консоль.

3. Використовуйте try/catch для обробки помилки в асинхронній функції, яка кидає помилку.*/

const asyncFN = async() => {
   setTimeout(() => console.log("Hello world"), 1000); 
   
}

asyncFN();