/* Опис
1. Редагувати
2. Створіть об'єкт, який представляє книгу з властивостями title, author та year.

3. Додайте нову властивість genre до об'єкта книги.

4. Видаліть властивість year з об'єкта книги.*/

let book = {
    title: "Pride and prejudice",
    author: "Jane Austen",
    year: 1813
}

let bookChanged = book
bookChanged.genre = "novel";

delete bookChanged.year 