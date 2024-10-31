import React from 'react';
import './GovernanceSystems.css';
import Democracy from '../Assets/democracy.png';
import IndianFlag from '../Assets/india.png';
import USFlag from '../Assets/america.png';
import SingaporeFlag from '../Assets/singapore.png';
import CanadaFlag from '../Assets/canada.png';
import GermanyFlag from '../Assets/germany.png';
import ItalyFlag from '../Assets/italy.png';
import CubaFlag from '../Assets/cuba.png';
import VenezuelaFlag from '../Assets/venezuela.png';
import ChinaFlag from '../Assets/china.png';
import VietnamFlag from '../Assets/vietnam.png';
import CapitalismImage from '../Assets/capitalism.png';
import NazismImage from '../Assets/nazism.png';
import FascismImage from '../Assets/fascism.png';
import SocialismImage from '../Assets/socialism.png';
import CommunismImage from '../Assets/communism.png';


const governanceData = [
    {
      title: "Democracy",
      description: "A system of government where people vote to choose their leaders and make decisions, so the power lies with the people.",
      imageUrl: Democracy,
      countries: [
        { name: "India", flagUrl: IndianFlag },
        { name: "United States", flagUrl: USFlag },
      ],
    },
    {
      title: "Capitalism",
      description: "An economic system where businesses and property are privately owned, and people work for profit. Success depends on competition and individual effort.",
      imageUrl: CapitalismImage,
      countries: [
        { name: "Canada", flagUrl: CanadaFlag },
        { name: "Singapore", flagUrl: SingaporeFlag },
       
      ],
    },
    {
        title: "Communism",
        description: "An economic and political system where the government owns all property and aims to create a classless society where wealth is shared equally.",
        imageUrl: CommunismImage,
        countries: [
          { name: "China", flagUrl: ChinaFlag },
          { name: "Vietnam", flagUrl: VietnamFlag },
        ],
      },
    {
        title: "Socialism",
        description: "A system where key industries and resources are owned and controlled by the community or government, aiming for fair distribution and reducing inequality.",
        imageUrl: SocialismImage,
        countries: [
          { name: "Cuba", flagUrl: CubaFlag },
          { name: "Venezuela", flagUrl: VenezuelaFlag },
        ],
      },
    {
      title: "Nazism",
      description: "A far-right ideology from Nazi Germany focused on extreme nationalism, racial superiority, and authoritarian control, with severe oppression of minorities.",
      imageUrl: NazismImage,
      countries: [
        { name: "Germany", flagUrl: GermanyFlag },
      ],
    },
    {
      title: "Fascism",
      description: "A political system that values extreme nationalism and dictatorial power, where the government controls many aspects of life and suppresses opposition.",
      imageUrl: FascismImage,
      countries: [
        { name: "Italy", flagUrl: ItalyFlag },
      ],
    },
   
    
  ];
  

const GovernanceSystems = () => {
  return (
    <section id="governance-systems" className="info-section">
      <h2 className="section-title">Types of Governance Systems</h2>
      <div className="system-cards">
        {governanceData.map((system, index) => (
          <div className="card" key={index}>
            <h3>{system.title}</h3>
            <p>{system.description}</p>
            <img src={system.imageUrl} alt={system.title} className="governance-image" />
            <h4>Countries Following This Governance:</h4>
            <ul className="country-list">
              {system.countries.map((country, idx) => (
                <li key={idx} className="country-item">
                  <img src={country.flagUrl} alt={`${country.name} flag`} className="country-flag" />
                  {country.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GovernanceSystems;
