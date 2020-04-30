import React, { useEffect, useState } from 'react'
import { Segment, Header, Card, Button } from 'semantic-ui-react'

import Loading from '../components/System/Loading'
import ErrorMessage from '../components/System/ErrorMessage'
import { buildUrl } from '../settings'
import User from '../components/Users/User'
import NewUser from '../components/Users/NewUser'

export default function Users() {
  const [visible, setVisible] = useState(false)
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

  async function addUser(user) {
    try {
      setLoading(true)
      const response = await fetch(buildUrl('/api/users'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      await response.json()
      await fetchData()
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  async function removeUser(id) {
    try {
      setLoading(true)
      const response = await fetch(buildUrl(`/api/users/${id}`), { method: 'DELETE' })
      await response.json()
      await fetchData()
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
    <Segment style={{ overflow: 'auto' }} color="teal" tertiary padded basic>
      <Header as="h3">Users</Header>
      <Button
        style={{ position: 'absolute', top: '20px', right: '20px' }}
        circular
        size="tiny"
        color="green"
        inverted
        icon="add"
        onClick={() => setVisible(!visible)}
      />

      {visible ? <Segment padded basic><NewUser addUser={addUser} /></Segment> : ''}
      <Card.Group doubling itemsPerRow={4}>
        {users.map((user) => <User user={user} removeUser={removeUser} key={user.id} />)}
      </Card.Group>
    </Segment>
  )
}
