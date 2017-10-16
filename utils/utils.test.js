const util = require('./utils')

// Test for add function
it('Should add two numbers', () => {
  const res = util.add(33, 11)
  
  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}`)
  }
})

// Test for square function
it('Should square the number', ()=> {
  const res = util.square(2)

  if(res !== 4) {
    throw new Error(`Expected 4, but got ${res}`)
  }
})