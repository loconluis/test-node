// Sum two numbers
module.exports.add = (a, b) => a + b
// async add function
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    let res = a + b
    callback(res)
  }, 1000)
}
// Square a number
module.exports.square = (x) => x * x
// async square function
module.exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    let res = x * x
    callback(res)
  }, 1000)
}
// Set a name and lastname for object user
module.exports.setName = (user, fullname) => {
  let names = fullname.split(' ')
  user.firstName = names[0]
  user.lastName = names[1]

  return user
}
