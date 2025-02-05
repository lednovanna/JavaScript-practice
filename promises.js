/* Створіть проміс, який резолвиться через 2 секунди з повідомленням "Promise resolved!".

Використовуйте then для виведення повідомлення, коли проміс буде резолвлено.

Створіть проміс, який відхиляється з помилкою "Promise rejected!" та обробіть цю помилку за допомогою catch.*/

const myPromise = new Promise ((resolve) => {
     setTimeout(() => {
        resolve('Resolved');
     },  2000)
});


myPromise
.then((message) => {
    console.log(message);
})

.catch((error) => {

   console.error(error);
});

