import React from 'react'
import renderer from 'react-test-renderer'
import { Intro } from '../src/components/landing/Intro/index'

describe('Intro Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
