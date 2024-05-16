import React from 'react';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import Pricing from '../../components/Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;