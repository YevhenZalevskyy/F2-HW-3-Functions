
// #1  Найбільша цифра
function getMaxDigit(number) {
  const arr = number.toString().slice();
  return Math.max(...arr);
}

// #3 Перша літара Велика
function firstLetterOfName(name) {
  name = name.toLowerCase();
  return name[0].toUpperCase() + name.slice(1);
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


// Вивід результатів
document.writeln(`
Function #1: ${getMaxDigit(0129210)}<br>
Function #3: ${firstLetterOfName("iVaN")}<br>
Function #6: ${countChar("Hello WORLD!", "L")}<br>

 `);
