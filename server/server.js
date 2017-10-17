const express = require('express')

const app = express()
let users = [
  {
    name: 'Luis',
    age: 24
  },
  {
    name: 'Alfonso',
    age: 21
  },
  {
    name: 'Carlos',
    age: 22
  }
]

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  })
})

app.get('/users', (req, res) => {
  res.status(200).send(
    [
      {
        name: 'Luis',
        age: 24
      },
      {
        name: 'Alfonso',
        age: 21
      },
      {
        name: 'Carlos',
        age: 22
      }
    ]
  )
})

if (!module.parent) { // this help us cause test run the server, to kill that run we use this
  app.listen(3000, () => {
    console.log('Server is running at port 3000')
  })
}

module.exports.app = app
