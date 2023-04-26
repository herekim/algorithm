// 내 풀이
function solution(elements) {
  const subseqSum = new Set()

  for (let i = 0; i < elements.length; i++) {
    const width = i + 1
    for (let j = 0; j < elements.length; j++) {
      const slidingWindow = elements.slice(j, j + width)

      if (j + width > elements.length) {
        const frontWidth = j + width - elements.length
        const frontSlidingWindow = elements.slice(0, frontWidth)
        const windowSum = [...frontSlidingWindow, ...slidingWindow].reduce(
          (acc, curr) => acc + curr,
        )
        subseqSum.add(windowSum)
      } else {
        const windowSum = [...slidingWindow].reduce((acc, curr) => acc + curr)
        subseqSum.add([...slidingWindow].reduce((acc, curr) => acc + curr))
      }
    }
  }

  return subseqSum.size
}

// 다른 사람의 풀이
function solution2(elements) {
  const circular = elements.concat(elements)
  const set = new Set()
  for (let i = 0; i < elements.length; i++) {
    let sum = 0
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j]
      set.add(sum)
    }
  }
  return set.size
}

// ChatGPT 풀이
function solution3(elements) {
  const result = new Set()

  for (let i = 1; i <= elements.length; i++) {
    let sum = 0

    // 초기 윈도우의 합 계산
    for (let j = 0; j < i; j++) {
      sum += elements[j % elements.length]
    }

    // 슬라이딩 윈도우 알고리즘을 사용하여 연속 부분 수열의 합을 계산
    for (let k = 0; k < elements.length; k++) {
      result.add(sum)

      sum -= elements[k % elements.length] // 윈도우에서 제거되는 원소를 뺌
      sum += elements[(k + i) % elements.length] // 윈도우에 추가되는 원소를 더함
    }
  }

  return result.size
}

console.log(solution2([7, 9, 1, 1, 4]))

/*
 * 계획
 * 1. 겹치는 값을 제외한 연속 부분 수열의 합을 넣어주기 위해 Set 자료구조 만든다.
 * 2. elements의 길이만큼 for문을 돈다.
 * 3. 내부에서 elements 길이만큼 for문을 돈다.
 * 4. slice로 index + 1개의 윈도우를 만든다.
 *    4.1. 윈도우의 끝이 배열의 끝 이하인 경우엔 그냥 slice한다.
 *    4.2. 원도우의 끝이 배열의 끝 초과인 경우엔 배열의 끝까지 slice하고, 남는 숫자만큼 배열의 첫번째부터 slice해서 새로운 배열을 만든다.
 * 5. 차례로 더한 값을 Set에 넣어준다.
 *
 * 시간&공간 복잡도
 * O(n^3)
 *
 * 예상 유형
 * 슬라이딩 윈도우
 *
 * 배울점
 * 1. 원형으로 배열이 연결되어 있다고 가정할 때 frontWindow를 구하는 게 아니라 배열을 두번 합쳐버리는 방법도 있다.
 * 2. 꼭 슬라이딩 윈도우로 풀 필요없다. sum 변수를 만들고, 가능한 값들을 넣어주는 방식으로도 풀 수 있다.
 * 3. %를 잘 활용하자.
 */
