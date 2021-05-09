export default class Searches {

  simpleSearch(sortedArray, item) {
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === item) {
        return i;
      }
    }
  }

  binarySearch(sortedArray, item) {
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
      let mid = (low + high) / 2;
      let guess = sortedArray[mid];
      if (guess === item) {
        return mid;
      }
      else if (guess > item) {
        high = mid - 1;
      }
      else low = mid + 1;
    }
    return null;
  }
}