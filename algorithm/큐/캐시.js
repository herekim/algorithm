function solution(cacheSize, cities) {
  let answer = 0
  const cacheCities = []

  if (cacheSize === 0) {
    return (answer = cities.length * 5)
  }

  cities.forEach((city) => {
    const lowerCaseCity = city.toLowerCase()
    const cachedCityIndex = cacheCities.indexOf(lowerCaseCity)

    if (cacheCities.length >= cacheSize) {
      if (cacheCities.includes(lowerCaseCity)) {
        cacheCities.splice(cachedCityIndex, 1)
        cacheCities.push(lowerCaseCity)
        answer++
      } else {
        cacheCities.shift()
        cacheCities.push(lowerCaseCity)
        answer = answer + 5
      }
    }

    if (cacheCities.length < cacheSize) {
      if (cacheCities.includes(lowerCaseCity)) {
        cacheCities.splice(cachedCityIndex, 1)
        cacheCities.push(lowerCaseCity)
        answer++
      } else {
        cacheCities.push(lowerCaseCity)
        answer = answer + 5
      }
    }
  })

  return answer
}

const cacheSize = 0
const cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'Seoul']

console.log(solution(cacheSize, cities))

/**
 * 계획
 * 1. 캐시된 도시에 대한 배열을 만들고 큐로 사용한다. (만약 효율성 검사 통과 못하면 연결리스트로 큐 구현)
 * 2. 도시 배열을 돌면서 조건에 따라 캐시와 실행시간을 업데이트 해준다.
 * 3. 조건은 다음과 같다.
 *    - 캐시큐의 길이가 캐시크기 이상이면서 캐시에 요소가 없으면 캐시큐 첫번째 요소 shift, 현재 도시 push, 실행시간 +5
 *    - 캐시큐의 길이가 캐시크기 이상이면서 캐시에 요소가 있으면 캐시큐에서 해당 도시 삭제, 현재 도시 push, 실행시간 +1
 *    - 캐시큐의 길이가 캐시크기 미만이면서 캐시에 요소가 없으면 캐시큐에 현재 도시 push, 실행시간 +5
 *    - 캐시큐의 길이가 캐시크기 미만이면서 캐시에 요소가 있으면 캐시큐에서 해당 도시 삭제, 현재 도시 push, 실행시간 +1
 *    - 캐시가 0이라면 cities.length * 5 반환
 *
 * 시간&공간 복잡도
 * O(n^2)
 *
 * 예상 유형
 * 완전 탐색 & 큐
 */
