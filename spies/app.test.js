const expect = require('expect')
const rewire = require('rewire')

let app = rewire('./app')

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)
  // using spies
  it('Should call the spy correctly', () => {
    let spy = expect.createSpy()
    spy('Luis', 24)
    expect(spy).toHaveBeenCalledWith('Luis', 24)
  })

  it('Should call saveUser with user object', () => {
    let email = 'luis.locon@gmail.com'
    let password = '123abc'

    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  })
})
