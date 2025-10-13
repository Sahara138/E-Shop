import React from 'react'
import Container from '../../globalComponents/Container';
// import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Banner from './components/Banner';
import SupportSection from './components/support';
import FeaturedProducts from './components/featuredProducts';
import Overview from './components/Overview';
import NewProducts from './components/NewProducts';
import SpringSale from './components/springSale';
import BestSeller from './components/bestSeller';
import FAQ from './components/FAQ';
import TechTalks from './components/techtalks';
import { Companies } from './components/Companies';
import { Subscribe } from './components/Subscribe';
import { Footer } from '../../globalComponents/FooterComponents';

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
      <SpringSale />
      <BestSeller />
      <FAQ />
      <TechTalks />
      <Container >
        <Companies />
        <Subscribe />
      </Container>
    </div>
  )
}

export default Home
