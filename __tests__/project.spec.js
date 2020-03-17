import React from 'react'
import renderer from 'react-test-renderer'
import { Projects } from '../src/components/landing/Projects/index'

describe('Project Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Projects />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  // mock data
  it('it fetches the data', () => {})
})
