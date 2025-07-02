import React from 'react'
import Container from '../../globalComponents/Container';
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Banner from './components/Banner';
import SupportSection from './components/support';
import FeaturedProducts from './components/featuredProducts';

const Home = () => {
  const {t} = useTranslation()
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container >
        <Banner />
        <SupportSection />
        <FeaturedProducts />
      </Container>
    </div>
  )
}

export default Home
