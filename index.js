const cats = [];
cats.push("Milo", "Otis", "Garfield");


function destructivelyAppendCat(name) {
  cats.push(name)
  return 
};

function destructivelyPrependCat(name) {
  cats.unshift(name)
  return 
};

function destructivelyRemoveLastCat(name) {
  cats.pop()
  return 
};

function destructivelyRemoveFirstCat(name) {
  cats.shift(name)
  return 
};

function appendCat(name) {
  const new_arr = [...cats,name]
  return new_arr 
};

function prependCat(name) {
  const new_arr = [name,...cats]
  return new_arr 
};

function removeLastCat(name) {
  const new_arr = [...cats]
  new_arr.pop();
  return new_arr; 
};

function removeFirstCat(name) {
  const new_arr = [...cats]
  new_arr.shift();
  return new_arr; 
};
