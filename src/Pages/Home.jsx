import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import IndianLawSystem from '../Components/IndianLawSystem/IndianLawSystem';
import ImportanceOfLaw from '../Components/ImportanceOfLaw/ImportanceOfLaw';
import GovernanceSystems from '../Components/GovernanceSystems/GovernanceSystems';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IndianLawSystem />
      <ImportanceOfLaw />
      <GovernanceSystems />
     
    </div>
  );
};

export default Home;
