function filesMapFunc(file) {
  const matched = file.match(/(.*?)(\d+)(.*)/)
  return {
    HEAD: matched[1],
    NUMBER: matched[2],
    TAIL: matched[3],
  }
}

function filesSortFunc(a, b) {
  const aHead = a.HEAD.toLowerCase()
  const bHead = b.HEAD.toLowerCase()
  const compare = aHead.localeCompare(bHead)

  if (compare !== 0) return compare

  return Number(a.NUMBER) - Number(b.NUMBER)
}

function solution(files) {
  return files
    .map(filesMapFunc)
    .sort(filesSortFunc)
    .map((item) => `${item.HEAD}${item.NUMBER}${item.TAIL}`)
}

/*
* https://school.programmers.co.kr/learn/courses/30/lessons/17686

문제 유형
- 구현, 문자열 처리, 정렬

풀이 계획
1. 들어오는 문자열의 헤드, 넘버, 테일을 분리한다.
2. 헤드를 기준으로 정렬하고, 같은 헤드 내에서 넘버를 기준으로 정렬한다.
    2.1. 헤드 정렬 시 대소문자 구분을 하지 않는다.
    2.2. 넘버 정렬 시 숫자를 기준으로 정렬한다.
3. 정렬된 배열을 합친다.

수도 코드
1. map 돌면서 객체에 HEAD, NUMBER, TAIL을 키로 값들을 저장한다.
2. HEAD가 같다면 NUMBER를 기준으로 정렬하고, 아니라면 그대로 둔다.
3. 정렬된 배열을 map 돌면서 합친다.

배운 점
- 정규 AString.localeCompare(BString)은 -1, 0, 1을 반환한다.  
  - -1: A가 B보다 앞, 0: 같음, 1: A가 B보다 뒤

배울 점
- 정규 표현식
*/
