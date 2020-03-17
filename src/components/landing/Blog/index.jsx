import React, { useState, useEffect } from 'react'
import { Container, Card, Tag, Item } from 'components/common'
import Moment from 'moment'
import { Wrapper, Grid, Content } from './styles'

export const Blog = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=cbun097`)
      .then(response => response.json())
      .then(resultData => {
        setArticles(resultData)
      })
  }, [])

  return (
    <Wrapper as={Container} id="blog">
      <h2>Latest post</h2>
      <Grid>
        {articles.map(data => (
          <Item key={data.id} as="a" href={data.url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <h3>{data.title}</h3>
                <div>
                  <img src={data.cover_image} alt="article dev" />
                </div>

                <p>{data.description}</p>
              </Content>
              <p>{Moment(data.published_at).format('MMMM Do YYYY')}</p>
              {data.tag_list.map((tag, i) => (
                <Tag key={i}>#{tag}</Tag>
              ))}
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
