// Решение системы линейных уравнений методом Крамера
// n1 * x + n2 * y = n3
// n4 * x + n5 * y = n6

// Коэффициенты уравнений
let n1 = 3, n2 = 4, n3 = 10;
let n4 = 2, n5 = -1, n6 = 1;

// Вычисляем определители
// Определитель основной матрицы системы: D = n1 * n5 - n2 * n4
// Если D = 0, система либо не имеет решений, либо имеет бесконечно много решений.
let D = n1 * n5 - n2 * n4;

// Определитель матрицы для x: заменяем столбец x на значения правой части (n3, n6)
let Dx = n3 * n5 - n2 * n6;

// Определитель матрицы для y: заменяем столбец y на значения правой части (n3, n6)
let Dy = n1 * n6 - n3 * n4;

// Проверка на случай, если система не имеет единственного решения
if (D === 0) {
    console.log("Система не имеет единственного решения");
} else {
    // Если определитель основной матрицы не равен 0, находим x и y методом Крамера по формулам
    // x = Dx / D
    // y = Dy / D
    let result1 = Dx / D;            
    let result2 = Dy / D;            

    console.log("Решение системы:");
    console.log("x =", result1);      
    console.log("y =", result2);      
}
