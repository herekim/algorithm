function solution(n, m, arr) {
  let answer = 0

  let leftPointer = 0
  let rightPointer = 1

  for (let i = 0; i < arr.length; i++) {
    let count = arr[i]

    leftPointer = i

    for (let j = i + 1; j < arr.length; j++) {
      count += arr[j]

      if (count === m) {
        answer++
        continue
      }

      if (count > m) {
        continue
      }
    }
  }

  return answer
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]))

/*
계획
1. 왼/오른 포인터가 존재한다.
2. arr를 for문 돌면서 연속부분수열의 합을 계산한다.
  2.1. 왼쪽 포인터는 for문의 현재 인덱스로 업데이트한다.
  2.2. 오른쪽 포인터는 왼쪽 포인터+1부터 시작해서 합이 m과 같을 때까지 오른쪽으로 한칸씩 이동하면서 합을 구한다.
    2.2.1. 오른쪽 포인터를 돌리기 위해 for문을 사용한다.
    2.2.2. 만약 m보다 커지는 구간이 있으면 continue

시간/공간 복잡도
O(n^2)

예상 유형
: 투포인터

배운 점
*/
