import React from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import Home from './pages/Home'
import Games from './pages/Games'
import About from './pages/About'
import Users from './pages/Users'

export default function App() {
  return (
    <Router>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} icon="labeled" inverted vertical visible width="thin">
          <Menu.Item as={Link} to="/">
            <Icon name="home" />
            {' '}
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/games">
            <Icon name="gamepad" />
            {' '}
            Games
          </Menu.Item>
          <Menu.Item as={Link} to="/users">
            <Icon name="user secret" />
            {' '}
            Users
          </Menu.Item>
          <Menu.Item as={Link} to="/about">
            <Icon name="bolt" />
            {' '}
            About
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Router>
  )
}
