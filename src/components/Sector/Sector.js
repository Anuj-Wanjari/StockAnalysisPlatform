import React from 'react';
import { Link } from 'react-router-dom';
import './Sector.css';

import nifty50Image from '../../images/nifty50.jpg';
import nifty100Image from '../../images/nifty100.jpg';
import consumer_staplesImage from '../../images/consumer_staples.jpg';
import consumer_discretionaryImage from '../../images/consumer_discretionary.jpg';
import energyImage from '../../images/energy.jpg';
import private_banksImage from '../../images/private_banks.jpg';
import public_banksImage from '../../images/public_banks.jpg';
import it_sectorsImage from '../../images/it_services.jpg';
import software_servicesImage from '../../images/software_services.jpg';
import iron_steelImage from '../../images/iron_steel.jpg';
import metals_specificImage from '../../images/metals_specific.jpg';
import metals_diversifiedImage from '../../images/metals_diversified.jpg';
import miningImage from '../../images/mining.jpg';
import real_estateImage from '../../images/real_estate.jpg';
import paper_productsImage from '../../images/paper_products.jpg';
import wood_productsImage from '../../images/wood_products.jpg';
import utilitiesImage from '../../images/utilities.jpg';
import plastic_productsImage from '../../images/plastic_products.jpg';
import commodity_chemicalsImage from '../../images/commodity_chemicals.jpg';
import diversified_chemicalsImage from '../../images/diversified_chemicals.jpg';
import fertilizers_agro_chemicalsImage from '../../images/fertilizers_agro_chemicals.jpg';
import cementImage from '../../images/cement.jpg';

const sectors = [
  { image: nifty50Image, name: 'Nifty 50', link: '/sector/nifty50' },
  { image: nifty100Image, name: 'Nifty 100', link: '/sector/nifty100' },
  { image: consumer_staplesImage, name: 'Consumer Staples', link: '/sector/consumer-staples' },
  { image: consumer_discretionaryImage, name: 'Consumer Discretionary', link: '/sector/consumer-discretionary' },
  { image: energyImage, name: 'Energy', link: '/sector/energy' },
  { image: private_banksImage, name: 'Private Banks', link: '/sector/private-banks' },
  { image: public_banksImage, name: 'Public Banks', link: '/sector/public-banks' },
  { image: it_sectorsImage, name: 'IT Services & Consulting', link: '/sector/it-services' },
  { image: software_servicesImage, name: 'Software Services', link: '/sector/software-services' },
  { image: iron_steelImage, name: 'Iron & Steel', link: '/sector/iron-steel' },
  { image: metals_specificImage, name: 'Metals - Specific', link: '/sector/metals-specific' },
  { image: metals_diversifiedImage, name: 'Metals - Diversified', link: '/sector/metals-diversified' },
  { image: miningImage, name: 'Mining', link: '/sector/mining' },
  { image: real_estateImage, name: 'Real Estate', link: '/sector/real-estate' },
  { image: paper_productsImage, name: 'Paper Products', link: '/sector/paper-products' },
  { image: wood_productsImage, name: 'Wood Products', link: '/sector/wood-products' },
  { image: utilitiesImage, name: 'Utilities', link: '/sector/utilities' },
  { image: plastic_productsImage, name: 'Plastic Products', link: '/sector/plastic-products' },
  { image: commodity_chemicalsImage, name: 'Commodity Chemicals', link: '/sector/commodity-chemicals' },
  { image: diversified_chemicalsImage, name: 'Diversified Chemicals', link: '/sector/diversified-chemicals' },
  { image: fertilizers_agro_chemicalsImage, name: 'Fertilizers & Agro Chemicals', link: '/sector/fertilizers-agro-chemicals' },
  { image: cementImage, name: 'Cement', link: '/sector/cement' },
];

const Sector = () => {
  return (
    <div className="sector-cards">
      {sectors.map((sector, index) => (
        <Link key={index} to={sector.link} className="card-link">
          <div className="card sector-card">
            <img src={sector.image} className="card-img-top" alt={sector.name} />
            <div className="card-body">
              <h5 className="card-title">{sector.name}</h5>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sector;
