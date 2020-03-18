import React from 'react'
import renderer from 'react-test-renderer'
import { Skills } from '../src/components/landing/Skills/index'

describe('Project Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Skills />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
