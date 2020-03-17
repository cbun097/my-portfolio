import React from 'react'
import renderer from 'react-test-renderer'
import { Header } from '../src/components/theme/Header/index'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
