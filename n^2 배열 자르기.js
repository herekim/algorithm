function solution(n, left, right) {
  let answer = []
  for (var i = left; i <= right; i++) {
    const col = Number.parseInt(i / n) + 1
    const row = (i % n) + 1

    console.log(1 % 3)

    console.log('n', n)
    console.log('i', i)
    console.log('col', col)
    console.log('row', row)

    answer.push(Math.max(col, row))
  }
  return answer
}

// 1 2 3
// 2 2 3
// 3 3 3

console.log(solution(3, 2, 5))

/*
계획

잘못된 계획
이유 : 이차배열을 만들려면 n = 10^7 이므로 메모리 문제가 생긴다.
1. 이차배열을 생성.
    1.1. Array.from을 이용해 n행 n열 크기의 배열 생성.
    1.2. 내부의 값을 i로 초기화 ❓
2. 이차배열을 일차배열로 변환.
    2.1. flat 메서드를 사용.
3. arr[left] ~ arr[right]까지의 새로운 배열을 반환.
    3.1. filter 메서드를 사용해서 left보다 크거나 같고, right보다 작거나 같은 인덱스일 때만 반환.

수정된 계획
1. left부터 right까지의 배열을 구한다.
2. 규칙은 행과 열 중 큰 수가 해당 위치를 차지하는 것이므로 col, row를 구하고, Math.max로 비교한다.
3. col은 n단위로 잘랐을 때 i의 위치이므로 나누기 연산자를 사용할 수 있다. -> Number.parseInt(i/n)+1
4. row는 n단위로 잘랐을 때 해당 col 내부에서 i의 위치이므로 나머지 연산자를 사용할 수 있다. -> (i%n)+1
5. 둘 중 큰 값을 answer에 push

시간/공간 복잡도
O(1)

예상 유형

배운 점
1. 나머지와 나누기를 사용해 일차원 배열에서 행렬의 위치를 파악할 수 있다.
2. 정사각형 행렬의 크기가 n이고, 일차원 배열의 인덱스가 i라면
    2.1. 행 위치는 i를 n으로 나눈 값의 +1을 한 값이다.
    2.2. 열 위치는 i를 n으로 나눈 나머지의 +1을 한 값이다.
3. 나머지와 나누기에 익숙해져야 한다.
*/
