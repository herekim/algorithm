function timeToMinutes(time) {
  const [hour, minute] = time.split(':').map(Number)
  return hour * 60 + minute
}

function calculateParkingTime(inTime, outTime) {
  return timeToMinutes(outTime) - timeToMinutes(inTime)
}

function calculateFee(fees, parkingTime) {
  if (parkingTime <= fees[0]) {
    return fees[1]
  }
  return fees[1] + Math.ceil((parkingTime - fees[0]) / fees[2]) * fees[3]
}

function solution(fees, records) {
  const carRecords = {}

  records.forEach((record) => {
    const [time, carNumber, type] = record.split(' ')
    if (!carRecords[carNumber]) {
      carRecords[carNumber] = { parkingTime: 0, lastInTime: null }
    }

    if (type === 'IN') {
      carRecords[carNumber].lastInTime = time
    }

    if (type === 'OUT') {
      const parkingTime = calculateParkingTime(
        carRecords[carNumber].lastInTime,
        time,
      )
      carRecords[carNumber].parkingTime += parkingTime
      carRecords[carNumber].lastInTime = null
    }
  })

  Object.keys(carRecords).forEach((carNumber) => {
    if (carRecords[carNumber].lastInTime) {
      const parkingTime = calculateParkingTime(
        carRecords[carNumber].lastInTime,
        '23:59',
      )
      carRecords[carNumber].parkingTime += parkingTime
    }
    carRecords[carNumber].fee = calculateFee(
      fees,
      carRecords[carNumber].parkingTime,
    )
  })

  return Object.keys(carRecords)
    .sort((a, b) => a - b)
    .map((carNumber) => carRecords[carNumber].fee)
}
// 기본시간 기본요금 단위시간 단위요금
const fees = [180, 5000, 10, 600]
const records = [
  '05:34 5961 IN',
  '06:00 0000 IN',
  '06:34 0000 OUT',
  '07:59 5961 OUT',
  '07:59 0148 IN',
  '18:59 0000 IN',
  '19:09 0148 OUT',
  '22:59 5961 IN',
  '23:00 5961 OUT',
]
console.log(solution(fees, records))

/*
계획
1. records를 map으로 반복하면서 배열 내의 객체로 만든 newRecords를 만든다. (e.g.{time: 0000, number: 7342, type: 'IN'})
2. 각 차량번호에 따라 fee를 계산하는 Map 자료구조를 만든다.
    2.1. Map은 차량 번호를 키로, 값은 입차기록, fee, 누적시간을 기록한다.
3. newRecords를 for문 돌면서 조건에 따라 fee를 구한다.
    3.1. 타입이 IN이고 차량번호가 없으면 차량번호에 따른 새로운 Map요소를 Set 해준다. 이때 입차기록을 true로 업데이트한다.
    3.2. 타입이 IN이고 차량번호가 있으면 입차기록을 업데이트한다.
    3.3. 타입이 OUT이면 누적시간, fee를 업데이트하고, 입차기록을 0으로 바꾼다.
4. 차량번호가 작은 순서대로 배열에 fee가 담기도록 answer를 변환하고 반환한다.

시간/공간 복잡도
O(N + MlogM)

예상 유형
해쉬 & 구현

배운 점
1. 꼭 새로운 배열을 만들기보다 기존 배열의 구조분해할당과 함수를 조합해서 만드는 방향이 더 나을때도 있다.
2. parkingTime을 고려해야한다. parkingTime은 OUT일 때 시간과 lastTime을 뺀 값.
3. Object.keys
*/
