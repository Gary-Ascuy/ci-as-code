import React from 'react'
import { Image, Segment } from 'semantic-ui-react'

export default function GaryAscuy() {
  return (
    <>
      <Image src='/profile/gary.ascuy.jpg' size='medium' circular centered />
      <Segment style={{ fontSize: '15px', textAlign: 'center', fontStyle: 'italic' }} padded basic>Gary Ascuy is a Senior Software Developer with 8+ years of experience, he likes Robotics, Electronic and Informatics, and he loves to play with electronics in his free time and he is part of Docker Cochabamba Community, he also has a lot of experience putting small/medium systems in production.</Segment>
      <Segment style={{ fontSize: '25px', textAlign: 'center', fontStyle: 'italic' }} padded basic>Copyright © 2020</Segment>
    </>
  )
}