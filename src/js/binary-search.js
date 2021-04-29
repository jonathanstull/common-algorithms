export default class Searches {

  simpleSearch(listArray, item) {
    for (let i = 0; i < listArray.length; i++) {
      if (listArray[i] === item) {
        return i;
      }
    }
  }
}