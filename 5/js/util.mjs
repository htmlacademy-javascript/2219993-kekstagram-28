import {PHRASES, NAMES} from './data.mjs';

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  function getNum() {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      console.error(
        "Перебраны все числа из диапазона от " + min + " до " + max
      );
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  }
  return getNum();
}

const createComment = () => {
  return {
    id: getRandomInteger(1, 1000),
    avatar: `img/avatar-${createRandomIdFromRangeGenerator(1, 25)}.svg`,
    message:
      PHRASES[getRandomInteger(0, PHRASES.length - 1)] +
      PHRASES[getRandomInteger(0, PHRASES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};
const createObject = () => {
  return {
    id: createRandomIdFromRangeGenerator(1, 25),
    url: `photos/${createRandomIdFromRangeGenerator(1, 25)}`,
    description: "Очень хорошая фотография!",
    likes: getRandomInteger(15, 100),
    comments: createComment(),
  };
};


function getLength(text, length) {
  let answer;
  if (text.length <= length){
    answer = 'true';
  }
  else {
    answer = 'false';
    }
return(answer);
}
function palindrome(str) {
  str = str
    .toString()
    .toLowerCase()
    .replace(/\s/g, '');
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
}

export {createRandomIdFromRangeGenerator, getRandomInteger, createObject}
