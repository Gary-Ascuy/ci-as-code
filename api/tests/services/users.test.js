const { equal, deepEqual } = require('assert')
const { getId, allUsers, addUser, deleteUser } = require('../../src/services/users')

describe('services/users.js', () => {
  describe('.getId()', () => {
    it('Should return 1 for first element', () => {
      const actual = getId()
      equal(actual, 1)
    })
  })

  describe('.allUsers()', () => {
    it('Should return an array with 1 user', () => {
      const actual = allUsers()
      equal(actual.length, 1)
    })
  })

  describe('.addUser()', () => {
    it('Should add 2 elements with diferent data', () => {
      const first = addUser({ name: 'Test', role: 'Developer' })
      deepEqual(first, { id: 1, name: 'Test', role: 'Developer' })
      equal(allUsers().length, 2)

      const actual = addUser({ name: 'Test', role: 'Developer' })
      deepEqual(actual, { id: 2, name: 'Test', role: 'Developer' })
      equal(allUsers().length, 3)
    })
  })

  describe('.deleteUser()', () => {
    it('Should return an array without elements after delete all users', () => {
      allUsers().forEach(({ id }) => deleteUser(id))
      equal(allUsers().length, 0)
    })
  })
})
