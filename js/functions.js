function getLength(text, length) {
  let answer;
  if (text.length <= length){
  answer = 'true';
  }
  else {
    answer = 'false';
  }
console.log(answer);
}
function palindrome(str) {
  str = str
    .toString()
    .toLowerCase()
    .replace(/\s/g, "");
      return str === str.split("").reverse().join("");
}

function takeDigits(str) {
  let thenum = str.replace(/[^0-9]/g, '');
console.log(thenum);
}

function addStr(initstr, length, symbols) {
//  Объявляем переменную, в которую будем записывать результат
  let result = "";
// Сравниваем длину начальной строки с заданной. Если больше или равно - оставляем без изменений.
  if (initstr.length >= length){
result = initstr;
  }
  // Если меньше - прибавляем символы слева путем конкатенации.
  else{
    // функция для реверса строки
    function reverse(s) {
      var o = '';
      for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
      return o;
    }
    let fullSymbols = Math.ceil(((length - initstr.length)/symbols.length));
        result = symbols.slice(0, length-1) + initstr;
    if(fullSymbols > 1){
for (let i = 1; i <= fullSymbols-1; i++){
    result = reverse(symbols) + result;
      }}
      result = result.slice(-length);
}
console.log(result);
}
addStr('qwerty', 4, '0')
