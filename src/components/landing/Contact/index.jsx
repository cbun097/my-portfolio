import React from 'react'
import { Container } from 'components/common'
import contact from 'assets/illustrations/welcoming.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h2>Contact me</h2>
      <h4>
        You can contact directly via my <a href="mailto: cbun.dev@gmail.ca">email</a>.
      </h4>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Claire and I’m a Frontend developer and student!" />
    </Thumbnail>
  </Wrapper>
)
