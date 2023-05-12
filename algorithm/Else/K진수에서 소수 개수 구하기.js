function isPrime(s) {
  let n = Number(s)
  if (n <= 1) return false

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }

  return true
}

function solution(n, k) {
  var answer = 0

  const decimalConversion = n.toString(k)
  const decimalConversionArray = decimalConversion.split('0')

  for (let i = 0; i < decimalConversionArray.length; i++) {
    if (isPrime(Number(decimalConversionArray[i]))) {
      answer++
    }
  }

  return answer
}

/*
https://school.programmers.co.kr/learn/courses/30/lessons/92335

풀이 계획
1. 진수 변환 변수를 저장한다.
2. 소수 판별 함수를 만든다.
3. 진수 변환 수를 0을 기점으로 분리한 배열로 만든다.
4. 해당 배열을 for문 돌면서 요소가 0이 아니고, 소수일 경우에 answer++을 해준다.
*/
