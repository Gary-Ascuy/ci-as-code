import React, { useEffect, useState } from 'react'
import { Segment, Header, Card } from 'semantic-ui-react'

import Loading from '../components/System/Loading'
import ErrorMessage from '../components/System/ErrorMessage'
import { buildUrl } from '../settings'
import User from '../components/Users/User'

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchData() {
    try {
      const response = await fetch(buildUrl('/api/users'))
      const { data } = await response.json()
      setUsers(data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [])
  if (error) return <ErrorMessage error={error} />
  if (loading) return <Loading />
  return (
    <Segment color='teal' tertiary padded basic>
      <Header as='h3'>Users</Header>
      <Card.Group doubling itemsPerRow={4}>
        {users.map(user => <User user={user} key={user.id} />)}
      </Card.Group>
    </Segment>
  )
}
