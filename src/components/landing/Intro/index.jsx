import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev-focus.svg'
import Pdf from '../../../documents/CBUN_CV_06_2019.pdf'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m Claire and I’m a front-end developer & student!</h4>
				<Button purple>
					<a href={Pdf} rel="noopener noreferrer" target="_blank">View my resume</a>
				</Button>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Claire and I’m a front-end developer & student!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
