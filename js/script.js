'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function mystNum() {
  let num = Math.floor(Math.random() * 100) + 1, // загаданное число
    gues = 10; // попытки

  function game() {
    // ввод числа 
    let answ = prompt("Угадай число от 1 до 100");

    // сравнение на число

    if (isNumber(answ)) {
      gues--;
      console.log(gues);
      verify();
    } else if (typeof (answ) == 'string') {
      alert("Введи число!");
      game();
    } else if (answ == null) {
      alert("Игра окончена");
    }

    // сравнивает число и загаданное число
    function verify() {
      if (+answ === num) {
        let dec = confirm(`Поздравляю, Вы угадали за ${gues} попыток(-ки)! Хотели бы сыграть еще?`);
        if (dec) {
          mystNum();
        }
      } else if (answ < num) {
        confirm(`Загаданное число больше, осталось попыток: ${gues}`);
        if (gues > 0) {
          game();
        } else {
          let dec = confirm("Попытки закончились, хотите сыграть еще?");
          if (dec) {
            mystNum();
          }
        }
      } else if (answ > num) {
        confirm(`Загаданное число меньше, осталось попыток: ${gues}`);
        if (gues > 0) {
          game();
        } else {
          let dec = confirm("Попытки закончились, хотите сыграть еще?");
          if (dec) {
            mystNum();
          }
        }
      }
    }

  }
  game();
}

mystNum();