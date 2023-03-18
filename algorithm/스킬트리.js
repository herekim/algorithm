function solution(skill, skill_trees) {
  let answer = 0

  for (const skillTree of skill_trees) {
    // 상관없는 스킬은 제거한 스킬트리스택
    const skillTreeStack = [...skillTree]
      .reverse()
      .filter((tree) => skill.includes(tree))
    // 스킬스택
    const skillStack = [...skill].reverse()

    // 스킬트리 순회하면서 스킬이 스킬스택의 선행스킬과 같다면 스킬스택과 스킬트리스택 pop()
    for (const userSkill of skillTree) {
      if (userSkill === skillStack[skillStack.length - 1]) {
        skillStack.pop()
        skillTreeStack.pop()
      }
    }

    if (skillTreeStack.length === 0) {
      answer++
    }
  }
  return answer
}

const skill = 'CBD'
const skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA']

console.log(solution(skill, skill_trees))

/**
 * 계획
 * 1. 스킬트리의 요소들까지 이중 for문을 돌면서 올바른 순서를 가졌는지 체크하고 answer값을 올려줄 것
 * 2. 올바른 순서를 체크하는 방법은 필요없는 스킬은 제거한 스킬트리스택과 스킬스택을 만들고, 스킬트리 요소를 for문 돌면서 스킬스택의 선행스킬과 일치하면 스킬스택과 스킬트리스택을 pop해줌
 * 3. 스킬트리스택의 길이가 0이면 스킬순서에 맞게 트리를 밟은 것이므로 answer + 1
 *
 * 시간&공간 복잡도
 * O(n^2)
 *
 * 예상 유형
 * 스택
 */
