const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712]

const binarySearch = (array, findValue) => {
  let left = 0
  let right = array.length - 1
  let mid = Math.floor((left + right) / 2)
  while (left < right) {
    if (array[mid] === findValue) {
      return mid
    }
    if (array[mid] < findValue) {
      left = mid + 1
    }
    if (array[mid] > findValue) {
      right = mid - 1
    }
    mid = Math.floor((left + right) / 2)
  }
  return -1
}

console.log(binarySearch(array, 2876))
