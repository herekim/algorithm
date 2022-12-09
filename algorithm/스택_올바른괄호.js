function solution(s) {
  const stack = []

  for (const value of s) {
    if (value === '(') stack.push(value)
    if (value === ')') {
      if (stack.length === 0) return false
      stack.pop(value)
    }
  }

  return stack.length === 0
}

console.log(solution('()()'))
