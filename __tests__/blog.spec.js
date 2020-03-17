import React from 'react'
import renderer from 'react-test-renderer'
import { Blog } from '../src/components/landing/Blog/index'

describe('Blog Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Blog />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  // mock data
  it('it fetches the data', () => {})
})
