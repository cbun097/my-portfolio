import React from 'react'
import { Layout, SEO } from 'Common'
import page from 'Static/illustrations/page.svg'

export default () => (
	<Layout>
		<SEO title="404: Not found" location="/404" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		<img src={page}/>
	</Layout>
)
