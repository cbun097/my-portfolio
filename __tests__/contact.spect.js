import React from 'react'
import renderer from 'react-test-renderer'
import { Contact } from '../src/components/landing/index'

describe('Contact Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Contact />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
