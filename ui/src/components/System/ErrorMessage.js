import React from 'react'
import { Dimmer, Image, Message } from 'semantic-ui-react'

export default function ErrorMessage({ error }) {
  return (
    <Dimmer className='page loading' inverted active>
      <Image src='/assets/error.png' size='medium' centered />
      <Message color='red'>Oops, looks like your page died</Message>
    </Dimmer>
  )
}