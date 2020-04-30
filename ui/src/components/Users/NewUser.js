import React, { useState } from 'react'
import faker from 'faker'
import { Form, Segment, Button } from 'semantic-ui-react'

window.gary = faker

const options = [
  { key: 'j', text: 'Junior', value: 'Junior' },
  { key: 'f', text: 'Staff', value: 'Staff' },
  { key: 's', text: 'Senior', value: 'Senior' },
  { key: 'a', text: 'Architect', value: 'Architect' },
]

export function randomUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    joined: faker.random.number({ min: 1990, max: 2020 }),
    friends: faker.random.number({ min: 1, max: 100 }),
    role: faker.random.arrayElement(['Junior', 'Staff', 'Senior', 'Architect']),
    bio: faker.lorem.paragraph(),
  }
}

export default function NewUser({ addUser }) {
  const [values, setValues] = useState({})

  function updateField(key, event, user, data = {}) {
    const value = event.target.value || data.value
    setValues(Object.assign({}, user, { [key]: value }))
  }

  function save(event, user) {
    event.preventDefault()
    event.stopPropagation()
    addUser(user)
  }

  return (
    <Segment style={{ borderRadius: 10, margin: '0px 20%', minWidth: '300px' }} inverted color="blue">
      <Form onSubmit={(event) => save(event, values)} inverted>
        <Form.Group widths="equal">
          <Form.Input fluid label="Full Name" placeholder="Full Name" value={values.name} onChange={(e) => updateField('name', e, values)} />
          <Form.Input fluid label="Email" placeholder="Email" value={values.email} onChange={(e) => updateField('email', e, values)} />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input type="number" fluid label="Joined" placeholder="Joined" value={values.joined} onChange={(e) => updateField('joined', e, values)} />
          <Form.Input type="number" fluid label="Friends" placeholder="Number of Friends" value={values.friends} onChange={(e) => updateField('friends', e, values)} />
          <Form.Select
            fluid
            label="Role"
            options={options}
            placeholder="Role"
            value={values.role}
            onChange={(e, data) => updateField('role', e, values, data)}
          />
        </Form.Group>
        <Form.TextArea label="Bio" placeholder="Tell us more about you..." value={values.bio} onChange={(e) => updateField('bio', e, values)} />
        <Form.Group>
          <Form.Button type="button" onClick={() => setValues(randomUser())}>Random</Form.Button>
          <Form.Field control={Button}>Submit</Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  )
}
