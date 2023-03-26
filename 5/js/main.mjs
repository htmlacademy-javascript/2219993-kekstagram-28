import {createRandomIdFromRangeGenerator, getRandomInteger, createObject} from './util.mjs';



const createArray = () => {
  let arr = [];
  let length = 25;
  for (let i = 1; i <= length; i++) {
    arr.push(createObject());
  }
  return arr;
};

