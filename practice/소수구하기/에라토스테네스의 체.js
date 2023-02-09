/**
 * 고대 그리수 수학자 에라토스테네스가 발견한 소수 찾는 법
 * 해당 수가 소수인지가 아니라 1부터 해당 수까지 존재하는 소수를 찾는 방법
 * O(n log log n) 시간복잡도 => 왜인지는 아직 확실히 모르겠음
 */

function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)]

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false
      }
    }
  }

  return prime.filter(Boolean)
}
