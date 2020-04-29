import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const defaultPhoto = 'https://react.semantic-ui.com/images/avatar/large/matthew.png'

export default function User({ user }) {
  const { name, role, bio, photo, joined, friends } = user

  return (
    <Card>
      <Image style={{ padding: '3% 20%' }} src={photo || defaultPhoto} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <div style={{ fontWeight: 'bold' }}>{role}</div>
          {joined ? <div style={{ fontStyle: 'italic' }}>Joined in {joined}</div> : ''}
        </Card.Meta>
        <Card.Description>{bio || 'No Data'}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a><Icon name='user' /> {friends || 0} Friends</a>
      </Card.Content>
    </Card>
  )
}