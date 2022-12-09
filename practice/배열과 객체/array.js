/**배열 생성 */
const arr1 = new Array()
const arr2 = []
const arr3 = [1, 2, 3, 4, 5]
const arr4 = new Array(5)
const arr5 = new Array(5).fill(5)
const arr6 = Array.from(Array(5), (v, k) => {
  return k + 1
})

/**배열 편의 메소드 */
const arr = [1, 2, 3, 4, 5]
const arr7 = [7, 8, 9, 10]
const arrJoin = arr.join(',')
console.log(arrJoin)
const arrReverse = arr.reverse() // 원본 배열 변형 메소드
console.log(arrReverse)
arr.reverse()
const arrConcat = arr.concat(arr7)
console.log(arrConcat)

/**배열 요소 추가 및 삭제 */
// 맨 뒤에 추가 push, 삭제 pop
arr.push(7) // 원본 배열 변형
console.log(arr)
arr.pop() // 원본 배열 변형
console.log(arr)
// 맨 앞에 삭제 shift, 추가 unshift
arr.shift() // 원본 배열 변형
console.log(arr)
arr.unshift(1) // 원본 배열 변형
console.log(arr)
// 중간값 가져오기 slice
console.log(arr.slice(2, 5)) // 원본 배열 변형되지 않음, 2번째 요소부터 5번째 요소 앞까지 잘라서 가져온다
// 중간값 삭제 splice
console.log(arr.splice(2, 2)) // 원본 배열 변형, 2번째 요소부터 2개를 삭제한다

/**배열 순회 */
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

for (const item of arr) {
  console.log(item)
}

/**배열과 객체는 타입이 같다 */
const arr8 = [1, 2, 3, 4, 5]
arr8['key'] = 'value'
console.log(arr8) // [1,2,3,4,5, key: 'value']
console.log(arr8.length) // 5
