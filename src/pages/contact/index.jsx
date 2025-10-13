import React from 'react'
import Container from '../../globalComponents/Container'
import MapLocation from './components/MapLocation'
import { Helmet } from 'react-helmet-async'
import { Footer } from '../../globalComponents/FooterComponents'
import ContactBody from './components/ContactBody'
import ContactCta from './components/ContactCta'

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container >
        <MapLocation />
        <ContactBody />
        <ContactCta />
      </Container>
    </div>
  )
}

export default Contact
