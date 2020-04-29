import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'

const defaultPhoto = 'https://react.semantic-ui.com/images/avatar/large/matthew.png'

export default function User({ user, removeUser }) {
  const { id, name, email, role, bio, photo, joined, friends } = user

  return (
    <Card>
      <Image style={{ padding: '3% 20%' }} src={photo || defaultPhoto} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <div style={{ fontWeight: 'bold' }}>{role}</div>
          {email ? <div style={{ fontStyle: 'italic' }}>{email}</div> : ''}
          {joined ? <div style={{ fontStyle: 'italic' }}>Joined in {joined}</div> : ''}
        </Card.Meta>
        <Card.Description>{bio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span><Icon name='user' /> {friends || 0} Friends</span>
        <Button style={{ float: 'right' }} circular icon='close'
          size='mini' inverted color='red'
          onClick={() => removeUser(id)} />
      </Card.Content>
    </Card >
  )
}