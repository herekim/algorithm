/**
 * 효율성 개선
 * 어떤 소수도 N의 제곱근보다 큰 수로 나눠지지 않는다
 *
 * 예시 : 18은 소수인가?
 * 1. 18의 제곱근은 4.242...
 * 2. 18이 2,3,4 중 하나로 나눠지지 않으면 18은 소수
 * 3. 2로 나눠지므로 소수가 아님
 */

function is_prime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false
    }
    return true
  }
}
