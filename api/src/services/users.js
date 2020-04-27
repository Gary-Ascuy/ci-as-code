// fake database for user
const db = {
  users: {
    '0': { id: '0', name: 'Gary Ascuy', role: 'Developer' }
  }
}

export function getId() {
  const keys = Object.keys(db.users).map(key => +key)
  const last = keys.sort().reverse()[0] || 0
  return `${last + 1}`
}

export function allUsers() {
  return Object.values(db.users)
}

export function addUser(user) {
  user.id = user.id ? user.id : getId()
  db.users[user.id] = user
  return user
}

export function deleteUser(id) {
  const user = db.users[id] || {}
  delete db.users[id]
  return user
}
