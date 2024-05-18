// Task 1
function processArray(array) {
  let newProcessArray = [2,3,3,5,7,5,8];
  for (let i = 0; i < newProcessArray.length; i++){
    if (newProcessArray[i] % 2 === 0){
        newProcessArray[i] = newProcessArray[i]*newProcessArray[i];
    }else {
        newProcessArray[i] = newProcessArray[i]*3;
    }
  }
  return newProcessArray;
}

// Task 2
function formatArrayStrings(strings,numbers) {
    let newFormatArray = [];
    for (let i = 0; i < strings.length; i++){
        if(numbers[i]%2 === 0){
            newFormatArray.push(strings[i].toUpperCase());
        }else {
            newFormatArray.push(strings[i].toLowerCase());
    }
}
    return newFormatArray;
};

 