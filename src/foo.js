/* This represents initial stage, when tests were written, and the "bar" function remained inside the "foo" module.
const bar = () => {
  return 'other bar'
}
*/

const hello = () => {
  const message = bar()
  return 'hello ' + message
}

module.exports = { hello }