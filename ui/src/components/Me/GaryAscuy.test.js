import React from 'react'
import { render } from '@testing-library/react'

import GaryAscuy from './GaryAscuy'

test('renders learn react link', () => {
  const { getByText } = render(<GaryAscuy />)

  const content = getByText(/Gary Ascuy/i)
  expect(content).toBeInTheDocument()
})
