const obj1 = new Object()
const obj2 = {}
const obj3 = { name: '김희열', company: 'undefined' }

/**추가 및 삭제 */
const obj = { name: '김희열', company: '백수' }
obj['email'] = 'khere220@gmail.com'
obj.phone = '01039119850'
delete obj.phone
console.log(obj)

/**키 확인 */
console.log('email' in obj)
console.log('phone' in obj)

/**객체 순회 */
console.log(Object.values(obj))
console.log(Object.keys(obj))
for (const key in obj) {
  console.log(key, obj[key])
}
