function processArray(array) {
  let newProcessArray = [2,3,3,5,7,5,8];
  for (let i = 0; i < newProcessArray.length; i++){
    if (newProcessArray[i] % 2 === 0){
        newProcessArray[i] = newProcessArray[i]*2;
    }else {
        newProcessArray[i] = newProcessArray[i]*3;
    }
  }
  return newProcessArray;
}
