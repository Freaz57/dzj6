//Задание 1
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} – это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} – четное число`);
    } else {
        console.log(`${i} – нечетное число`);
    }
}

//Заадание 2

let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2); // Удаляем элементы с индекса 3 (четвертый элемент), удаляем 2 элемента
console.log(array); // Выведет [1, 2, 3, 6, 7]

//Задание 3
let numbers = [];
let sum = 0;
let min = 10; // Больше максимального возможного случайного числа
let containsThree = false;

for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 10);
    numbers.push(number);
    sum += number;
    if (number < min) {
        min = number;
    }
    if (number === 3) {
        containsThree = true;
    }
}

console.log(numbers); // Выведет сгенерированный массив
console.log(`Сумма элементов массива: ${sum}`);
console.log(`Минимальное число в массиве: ${min}`);
console.log(`Число 3 присутствует в массиве: ${containsThree}`);

//Задание 4

for (let row = 1; row <= 20; row++) {
    console.log('x'.repeat(row));
}
