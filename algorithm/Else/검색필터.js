function solution(history, option, keyword) {
  var answer = []

  const wordSplitHistory = history.map((sentence) => sentence.split(' '))

  const isW = option.some((option) => option[0] === 'W')
  const isR = option.some((option) => option[0] === 'R')
  const isWC = option.some((option) => option[0] === 'WC')

  const wcOption = isWC ? option.find((option) => option[0] === 'WC')[1] : null

  if (isW) {
    wordSplitHistory.forEach((splitSentence, index) => {
      if (splitSentence.includes(keyword)) {
        answer.push(history[index])
      }
    })
  }
  if (isR) {
    const RAnswer = answer.map((sentence) =>
      sentence.length > 10 ? sentence.substr(0, 10) + '...' : sentence,
    )
    answer = RAnswer
  }
  // 여기서 실패
  if (isWC) {
    answer = []
    const wildCardCount = (keyword.match(/\*/g) || []).length
    if (wildCardCount > 1) {
      return ['empty']
    } else if (keyword === '*') {
      answer = history
    } else if (wcOption === 'T') {
      const wc = keyword.split('*')[0]
      wordSplitHistory.forEach((splitSentence, index) => {
        splitSentence.forEach((word) => {
          if (word.startsWith(wc)) {
            answer.push(history[index])
          }
        })
      })
    } else if (wcOption === 'F') {
      return ['empty']
    }
  }

  return answer.length === 0 ? ['empty'] : answer
}

console.log(
  solution(
    ['honggildong', 'honggilsoon', 'honggil', 'sshoonggildong'],
    [['WC', 'T']],
    'honggil*',
  ),
)
