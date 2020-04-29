// fake database for user
const db = {
  users: {
    '0': {
      id: '0',
      name: 'Gary Ascuy',
      email: 'gary.ascuy@gmail.com',
      role: 'Senior',
      bio: 'Gary Ascuy is a Senior Software Developer with 8+ years of experience, he likes Robotics',
      photo: '/assets/bots/15.svg',
      joined: '2016',
      friends: 0,
    }
  }
}

export function randomPic() {
  return `/assets/bots/${Math.floor(Math.random() * 18)}.svg`
}

export function getId() {
  const keys = Object.keys(db.users).map(key => +key)
  const last = keys.sort().reverse()[0] || 0
  return `${last + 1}`
}

export function allUsers() {
  return Object.values(db.users)
}

export function addUser({ id, name, email, role, bio, photo, joined, friends }) {
  const user = { id, name, email, role, bio, photo: photo || randomPic(), joined, friends }
  user.id = user.id ? user.id : getId()
  db.users[user.id] = user
  return user
}

export function deleteUser(id) {
  const user = db.users[id] || {}
  delete db.users[id]
  return user
}
