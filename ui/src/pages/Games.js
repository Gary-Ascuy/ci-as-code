import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { Context, SnakeGame } from 'react-game-snake'

export default function Games() {
  return (
    <Segment color='olive' tertiary padded basic>
      <Header as='h3'>Games</Header>
      <a style={{fontWeight: 'bold'}} href='https://www.npmjs.com/package/react-game-snake'>
        {'npm install react-game-snake'}
      </a><br/><br/>
      <SnakeGame
        colors={{
            field: "#dcddde",
            food: "#9b59b6",
            snake: "#3498db",
        }}
        countOfHorizontalFields={40}
        countOfVerticalFields={20}
        fieldSize={40}
        loopTime={200}
        pauseAllowed={true}
        restartAllowed={true}
        onLoose={(context: Context) => console.log(`You loosed with ${context.game.points} points.`)}
        onPause={(context: Context) => console.log("paused")}
        onRestart={(context: Context) => console.log("restarted")}
        onResume={(context: Context) => console.log("onResume")}
        onWin={(context: Context) => console.log(`You won with ${context.game.points} points.`)}
      />
    </Segment>
  )
}
