import React from 'react'
import Footer from '../Components/Footer'
import DownloadApp from '../Components/HomePage/DownloadApp'
import HelpCompanies from '../Components/HomePage/HelpCompanies'
import FindBestCompanies from '../Components/HomePage/FindBestCompanies'
import SearchByCatagory from '../Components/HomePage/SearchByCatagory'
import FeaturedJob from '../Components/HomePage/FeaturedJob'
import HomeHeader from '../Components/HomePage/HomeHeader'
import HomeTopHeader from '../Components/HomeTopHeader'

const HomePage = () => {
    return (
        <>
            <HomeTopHeader />
            <HomeHeader />
            <SearchByCatagory />
            <FeaturedJob />
            <FindBestCompanies />
            <HelpCompanies />
            <DownloadApp />
            <Footer />
        </>
    )
}

export default HomePage