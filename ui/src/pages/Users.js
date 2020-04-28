import React, { useEffect, useState } from 'react'
import { Segment, Header, Dimmer, Loader, Image, Message } from 'semantic-ui-react'

export function ErrorMessage({ error }) {
  return (
    <Dimmer className='page loading' inverted active>
      <Image src='/assets/error.webp' size='medium' centered />
      <Message centered inverted color='red'>Oops, looks like your page died</Message>
    </Dimmer>
  )
}

export function Loading() {
  return (
    <Dimmer className='page loading' active>
      <Loader content='Loading' />
    </Dimmer>
  )
}

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchData() {
    try {
      const { data } = await fetch('http://0.0.0.0:3666/api/users').then(res => res.json())
      setUsers(data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => fetchData(), [])
  if (error) return <ErrorMessage error={error} />
  if (loading) return <Loading />
  return (
    <Segment color='teal' tertiary padded basic>
      <Header as='h3'>Users</Header>
      {users.map(user => <div key={user.id}>{user.name} - {user.role}</div>)}
    </Segment>
  )
}
