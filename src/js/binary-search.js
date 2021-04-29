export default class Searches {

  simpleSearch(listArray, item) {
    for (let i = 0; i < listArray.length; i++) {
      if (listArray[i] === item) {
        return i;
      }
    }
  }

  binarySearch(listArray, item) {
    let low = 0;
    let high = listArray.length - 1;
    while (low <= high) {
      let mid = (low + high) / 2;
      
    }
  }
}