function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v])
  const result = []
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1)
    const combis = combinations(rest, n - 1)
    const combine = combis.map((v) => [fixed, ...v])
    result.push(...combine)
  })
  return result
}

function solution(numbers) {
  return [...new Set(combinations(numbers, 2).map((item) => item[0] + item[1]))].sort((a, b) => a - b)
}

const numbers = [1, 2, 3, 4, 5]
console.log(solution(numbers))

function solution2(numbers) {
  const result = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j])
    }
  }

  return [...new Set(result)]
}

console.log(solution2(numbers))
