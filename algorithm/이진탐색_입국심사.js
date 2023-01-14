function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b)
  let left = 1
  let right = sortedTimes[sortedTimes.length - 1] * n

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // 심사위원이 시간 내에 스스로 처리할 수 있는 입국자 수 합친 것
    // sum이 필요한 이유는 전체 mid 시간 기준으로 전체 심시위원이 처리할 수 있는 인원이 n보다 큰지 작은지를 판별하기 위해
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0)
    console.log(sum)
    if (sum < n) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}

console.log(solution(6, [1, 2, 3, 4, 5]))
