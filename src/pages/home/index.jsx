import React from 'react'
import Container from '../../globalComponents/Container';
// import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Banner from './components/Banner';
import SupportSection from './components/support';
import FeaturedProducts from './components/featuredProducts';
import Overview from './components/Overview';
import NewProducts from './components/NewProducts';

const Home = () => {
  // const {t} = useTranslation()
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container >
        <Banner />
        <SupportSection />
        <FeaturedProducts />
        <Overview />
        <NewProducts />
      </Container>
    </div>
  )
}

export default Home
