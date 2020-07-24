
// #1  Найбільша цифра
function getMaxDigit(number) {
  const arr = Math.abs(number.toString());
  return Math.max(...arr);
}

// №2 Ступінь числа
function powerOfNumber(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
     result = result * number;
   }
  return result;
}

// #3 Перша літара Велика
function firstLetterOfName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

//#4  Залишок від оплати
function restOfPay (pay, vat1, vat2) {
  const rest = pay - (pay * 0.01 * (vat1 + vat2));
  return rest;
}

// #5  Віпадкове ціле число з диапазону
function getRandomInteger(N, M) {
  let integer = Math.round(Math.random() * (M - N)) + N;
  return integer;
}

// #6  Скількі разів повторюється символ
function countChar(text, char) {
    let counter = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i].toLowerCase() === char.toLowerCase()) {
            counter++;
        }
    }
    return counter;
}

// #7  Конвертувати валюту
function convertCurrency(currencyAmount) {
  let convert = '';
  if (currencyAmount.toLowerCase().includes('uah')) {
    convert = (parseInt(currencyAmount).toString() / 28) + '$';
  } else if (currencyAmount.includes('$')) {
    convert = (parseInt(currencyAmount).toString() * 28) + 'UAH';
  } else {
    return 'Other currency is not convertible';
  }
  return convert;
}

// #8  Випадковий пароль
function randomPassword(passLenght = 8) {
    let password = '';
    for(let i = 0; i < passLenght; i++) {
      password += Math.floor(Math.random() * 10);
    }
    return password;
}

// #9  Видалення певного символу з рядка
function deleteChar (text, char) {
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    if (char.toUpperCase() !== text[i].toUpperCase())
      newText += text[i]
    }
  return newText;
}

// #10  Виявлення раку літерального (перевертня)
function isPalyndrom(str) {
  let str1 = str.replace(/\s/g, '').toLowerCase();
  let str2 = str1.split('').reverse().join('');
  if (str1 === str2) {
    return `"${str}" is palyndrom`;
  } else {
    return `"${str}" not is palyndrom`;
  }
}

// Видалення літер, якіх більше одної
function deleteDuplicateLetter(str) {
    let str1 = str.toLowerCase();
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if(str1.indexOf(str1[i]) === str1.lastIndexOf(str1[i])) {
            newStr += str[i];
        }
    }
  return newStr;
}

// Вивід результатів
document.writeln(`
Function #1: ${getMaxDigit(0129210)}<br>
Function #2: ${powerOfNumber(2, 5)}<br>
Function #3: ${firstLetterOfName('iVaN')}<br>
Function #4: ${restOfPay(1000, 17, 3)}<br>
Function #5: ${getRandomInteger(20, 90)}<br>
Function #6: ${countChar('Hello WORLD!', 'L')}<br>
Function #7: ${convertCurrency('10$')}, ${convertCurrency('280UaH')}, ${convertCurrency('100€')}<br>
Function #8: ${randomPassword(4)}<br>
Function #9: ${deleteChar("AbracadabrA", "a")}<br>
Function #10: ${isPalyndrom('Bonbon')}, ${isPalyndrom('Radar')}, ${isPalyndrom('Я несу гусеня')}<br>
Function #11: ${deleteDuplicateLetter('бабушка Ела ПельмЕни')}<br>
 `);
