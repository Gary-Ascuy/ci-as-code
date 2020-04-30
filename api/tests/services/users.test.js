import { equal, deepEqual } from 'assert'
import {
  getId, allUsers, addUser, deleteUser,
} from '../../src/services/users'

const user = {
  id: '1',
  email: 'gary@gmail.com',
  friends: 0,
  joined: 0,
  bio: 'bio',
  name: 'Test',
  role: 'Developer',
  photo: '/assets/bots/9.svg'
}

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
      const first = addUser(user)
      deepEqual(first, user)
      equal(allUsers().length, 2)
    })
  })

  describe('.deleteUser()', () => {
    it('Should return an array without elements after delete all users', () => {
      allUsers().forEach(({ id }) => deleteUser(id))
      equal(allUsers().length, 0)
    })
  })
})
