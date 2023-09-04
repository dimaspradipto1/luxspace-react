import Header from 'parts/Header'
import React from 'react'
import Hero from 'parts/Homepage/Hero'
import BrowseRoom from 'parts/Homepage/BrowseRoom'
import JustArrived from 'parts/Homepage/JustArrived'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

export default function HomePage() {
  return (
    <>
       <Header/>
       <Hero/>
       <BrowseRoom/>
       <JustArrived/>
       <Clients/>
       <Sitemap/>
       <Footer/>
    </>
  )
}
