import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

import Gary from '../components/Gary/Gary'

export default function About() {
  return (
    <Segment color='pink' tertiary padded basic>
      <Header as='h3'>About - Gary Ascuy</Header>
      <Gary />
    </Segment>
  )
}