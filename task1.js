var tCelsius = prompt('Введите температуру в градусах Цельсия: ');

function fCounting(val) {
    tFarengeit = (9 / 5) * val + 32;
    return tFarengeit;
}

fCounting(tCelsius);

alert('Вы ввели ' + tFarengeit + ' градусов по Фарингейту');