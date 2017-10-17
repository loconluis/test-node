
const expect = require('expect')

const util = require('./utils')

// Test for add function
it('Should add two numbers', () => {
  const res = util.add(33, 11)

  expect(res).toBe(44).toBeA('number')
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}`)
  // }
})
// Test for add function (but async way)
it('should async add two numbers', (done) => {
  util.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number')
    done() // use done to tell mocha this is a Async function
  })
})

// Test for square function
it('Should square the number', () => {
  const res = util.square(2)

  expect(res).toBe(4).toBeA('number')
  // if(res !== 4) {
  //   throw new Error(`Expected 4, but got ${res}`)
  // }
})
// Test for square function (but async way)
it('Should async square the number', (done) => {
  util.asyncSquare(3, (sqr) => {
    expect(sqr).toBe(9).toBeA('number')
    done()
  })
})

it('should expect some values', () => {
  // expect(12).toNotBe(11);
  // expect({name: 'Luis'}).toEqual({name: 'Luis'})
  // expect([2,3,4]).toInclude(2)
  // expect([2,3,4]).toExclude(5)
  expect({
    name: 'Luis',
    age: 24,
    location: 'Guatemala'
  }).toExclude({
    age: 25
  })
})

it('should verify first and last name are set', () => {
  let user = {location: 'Guatemala', age: 24}
  let res = util.setName(user, 'Luis Locon')

  // expect(res).toEqual(res)
  expect(res).toInclude({
    firstName: 'Luis',
    lastName: 'Locon'
  })
})
