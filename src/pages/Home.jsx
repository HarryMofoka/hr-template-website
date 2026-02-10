
import React from 'react';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import QuoteSection from '../components/sections/Quote';

const Home = () => {
    return (
        <main>
            <Hero />
            <Stats />
            <Services />
            <QuoteSection />
        </main>
    );
};

export default Home;
