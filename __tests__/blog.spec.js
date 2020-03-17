import React from 'react'
import renderer from 'react-test-renderer'
import fetchMock from 'fetch-mock'
import { Blog } from '../src/components/landing/Blog/index'

describe('Blog Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Blog />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('fetch data from dev.to', () => {
  it('return successful results', async () => {
    fetchMock.get('https://dev.to/api/articles?username=cbun097', {
      title: 'DevOps Handy Tool: Com2kube',
    })
    const response = await fetch('https://dev.to/api/articles?username=cbun097')
    const result = await response.json()
    expect(result.title).toEqual('DevOps Handy Tool: Com2kube')
  })
})
