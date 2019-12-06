import React from 'react'
import { Container, Card } from 'components/common'
import { Wrapper, Grid, Content } from './styles'

export const Blog = () => {
	return (
		<Wrapper as={Container} id="blog">
			<h2>Latest post</h2>
			<Grid>
				<Card>
					<Content>
						<h4>Coming soon</h4>
					</Content>
				</Card>
			</Grid>
		</Wrapper>
	)
}
