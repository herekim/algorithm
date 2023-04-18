function solution(str1, str2) {
  var answer = 0

  str1 = str1.toUpperCase()
  str2 = str2.toUpperCase()

  const arr1 = []
  const arr2 = []

  for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i].match(/[A-Z]/) && str1[i + 1].match(/[A-Z]/)) {
      arr1.push(str1[i] + str1[i + 1])
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (str2[i].match(/[A-Z]/) && str2[i + 1].match(/[A-Z]/)) {
      arr2.push(str2[i] + str2[i + 1])
    }
  }

  const intersection = []
  const union = []

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersection.push(arr1[i])
      arr2.splice(arr2.indexOf(arr1[i]), 1)
    }
    union.push(arr1[i])
  }

  for (let i = 0; i < arr2.length; i++) {
    union.push(arr2[i])
  }

  if (union.length === 0) {
    return 65536
  }

  answer = Math.floor((intersection.length / union.length) * 65536)
  return answer
}

const str1 = 'FRANCE'
const str2 = 'french'

console.log(solution(str1, str2))

/*
계획
1. 문자열을 모두 대문자로 바꾼다.
2. 문자열을 2개씩 끊어서 배열에 넣는다.
    2.1. str의 현재 요소와 다음 요소가 알파벳 대문자일 경우에만 arr에 넣는다. (string.match())
3. 두 배열을 비교해서 교집합을 구한다.
    3.1. arr1의 요소가 arr2에 있으면 교집합에 넣는다.
    3.2. arr2에서 교집합에 넣은 요소를 제거한다.
4. 두 배열을 비교해서 합집합을 구한다.
    4.1. arr1의 요소를 합집합에 넣는다.
    4.2. arr1을 순회하고 남은 arr2의 요소를 합집합에 넣는다.
5. 교집합의 길이를 합집합의 길이로 나눈다.
6. 65536을 곱한다.

시간/공간 복잡도
O(n^2)

예상 유형
문자열처리

배운 점
*/
