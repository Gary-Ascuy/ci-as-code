import React from 'react'
import { Segment, Header, Image } from 'semantic-ui-react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

export default function Home() {
  const { width, height } = useWindowSize()

  return (
    <Segment color='orange' tertiary padded basic>
      <Image src='/assets/home/welcome.png' size='medium' centered />
      <br /><br /><br />
      <Image src='/assets/home/purereact.png' size='medium' centered />

      <Image style={{position: 'fixed', bottom: 0, width: 100}} src='/assets/home/nodejs.png' size='medium' centered />
      <Image style={{position: 'fixed', bottom: 15, right: 170, width: 100}} src='/assets/home/react.png' size='medium' centered />
      <Confetti width={width} height={height} />
    </Segment>
  )
}
