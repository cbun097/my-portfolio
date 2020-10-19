import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/team-collaboration.svg'
import { ThemeContext } from 'providers/ThemeProvider'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Claire and I’m a Frontend developer and student!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <p>
            My name is Claire Bun. I am a DEC (Quebec's diploma of college studies) in Information Technology.
            Currently, I am an undergraduate in Computer Science. I have mostly experience in Angular and ReactJs.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  )
}
