import React from 'react'
import renderer from 'react-test-renderer'
import { Footer } from '../src/components/theme/Footer/index'

describe('Footer Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
