import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)

  const linkHome = getByText(/Home/i)
  expect(linkHome).toBeInTheDocument()

  const linkGames = getByText(/Games/i)
  expect(linkGames).toBeInTheDocument()

  const linkUsers = getByText(/Users/i)
  expect(linkUsers).toBeInTheDocument()

  const linkAbout = getByText(/About/i)
  expect(linkAbout).toBeInTheDocument()
})
