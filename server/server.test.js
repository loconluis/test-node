const request = require('supertest')
const expect = require('expect')

const app = require('./server').app

describe('Server test', () => { // Server
  describe('GET /', () => {
    it('Should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done)
    })
  })

  describe('GET /users', () => {
    it('Should send an array of users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Luis',
            age: 24
          })
        })
        .end(done)
    })
  })
})
