import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export default function Loading() {
  return (
    <Dimmer className="page loading" active>
      <Loader content="Loading" />
    </Dimmer>
  )
}
