// Stock.js
import React from 'react';
import './Stock.css';

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

const Stock = () => {
  const sectorData = [
    {
      image: nifty50Image,
      name: 'Nifty 50',
      description: 'This sector includes the top 50 companies by market capitalization.',
      points: [
        'Large-cap stocks',
        'Blue-chip companies',
        'High liquidity',
      ],
      link: 'https://www.tickertape.in/screener/equity/user/ZpF7TiENeLPVEIjl#overlay-custom-universe',
    },
    {
      image: nifty100Image,
      name: 'Nifty 100',
      description: 'This sector comprises the top 100 companies by market capitalization.',
      points: [
        'Includes Nifty 50',
        'Broader market representation',
        'Diverse sectors',
      ],
      link: 'https://example.com/nifty100',
    },
    {
      image: consumer_staplesImage,
      name: 'Consumer Staples',
      description: 'Companies providing essential products such as food, beverages, and household items.',
      points: [
        'FMCG Products',
        'Alchol, Beverages, & Soft Drinks',
        'Seed, Sugar, & Agro Products',
      ],
      link: 'https://example.com/consumer-staples',
    },
    {
      image: consumer_discretionaryImage,
      name: 'Consumer Discretionary',
      description: 'Companies offering non-essential goods and services, like automobiles and entertainment.',
      points: [
        'Automobiles & Auto Parts',
        'Liesure & Educational Services',
        'Retail & Apparel',
      ],
      link: 'https://example.com/consumer-discretionary',
    },
    {
      image: energyImage,
      name: 'Energy',
      description: 'Companies involved in the production and distribution of energy, including oil and gas.',
      points: [
        'Oil & Gas - Equipment',
        'Oil & Gas - Production',
        'Oil & Gas - Refining & Marketing',
        'Oil & Gas - Storage & Transportation',
      ],
      link: 'https://example.com/energy',
    },
    {
      image: private_banksImage,
      name: 'Private Banks',
      description: 'Private sector banks offering a range of financial services.',
      points: [
        'Commercial Banking owned by private entities',
        'Wealth Management & Private Equity',
        'Personalized services, efficiency, and innovation',
      ],
      link: 'https://example.com/private-banks',
    },
    {
      image: public_banksImage,
      name: 'Public Banks',
      description: 'Public sector banks providing financial services under government control.',
      points: [
        'Government-owned, serving public interest',
        'Offer savings accounts, loans, government schemes',
        'known for stability & social development focus',
      ],
      link: 'https://example.com/public-banks',
    },
    {
      image: it_sectorsImage,
      name: 'IT Services & Consulting',
      description: 'Companies offering IT services, including consulting and system integration.',
      points: [
        'Consulting & Commercial Services',
        'System Integration',
        'Outsourcing & Efficiency',
      ],
      link: 'https://example.com/it-services',
    },
    {
      image: software_servicesImage,
      name: 'Software Services',
      description: 'Companies developing and maintaining software applications.',
      points: [
        'Application Development and R&D',
        'Software Maintenance',
        'Software as a Service (SaaS)',
      ],
      link: 'https://example.com/software-services',
    },
    {
      image: iron_steelImage,
      name: 'Iron & Steel',
      description: 'Companies involved in the production of iron and steel.',
      points: [
        'Steel Manufacturing',
        'Iron Ore Mining',
        'Steel Products',
      ],
      link: 'https://example.com/iron-steel',
    },
    {
      image: metals_specificImage,
      name: 'Metals - Specific',
      description: 'Companies focused on specific metals such as aluminum or copper.',
      points: [
        'Aluminum',
        'Copper',
        'Zinc',
      ],
      link: 'https://example.com/metals-specific',
    },
    {
      image: metals_diversifiedImage,
      name: 'Metals - Diversified',
      description: 'Companies dealing with a range of metals including precious and base metals.',
      points: [
        'Gold',
        'Silver',
        'Platinum',
      ],
      link: 'https://example.com/metals-diversified',
    },
    {
      image: miningImage,
      name: 'Mining',
      description: 'Companies involved in the extraction of minerals and resources.',
      points: [
        'Coal Mining',
        'Gold Mining',
        'Diversified Mining',
      ],
      link: 'https://example.com/mining',
    },
    {
      image: real_estateImage,
      name: 'Real Estate',
      description: 'Companies involved in the buying, selling, and management of real estate properties.',
      points: [
        'Residential Real Estate',
        'Commercial Real Estate',
        'Real Estate Investment Trusts (REITs)',
      ],
      link: 'https://example.com/real-estate',
    },
    {
      image: paper_productsImage,
      name: 'Paper Products',
      description: 'Companies producing paper and related products.',
      points: [
        'Paper Manufacturing',
        'Packaging Materials',
        'Recycled Paper',
      ],
      link: 'https://example.com/paper-products',
    },
    {
      image: wood_productsImage,
      name: 'Wood Products',
      description: 'Companies involved in the production of wood products.',
      points: [
        'Timber',
        'Plywood',
        'Wood Furniture',
      ],
      link: 'https://example.com/wood-products',
    },
    {
      image: utilitiesImage,
      name: 'Utilities',
      description: 'Companies providing essential public services such as water, electricity, and natural gas.',
      points: [
        'Electric Utilities',
        'Water Utilities',
        'Natural Gas Utilities',
      ],
      link: 'https://example.com/utilities',
    },
    {
      image: plastic_productsImage,
      name: 'Plastic Products',
      description: 'Companies producing plastic products and materials.',
      points: [
        'Plastic Manufacturing',
        'Packaging',
        'Consumer Goods',
      ],
      link: 'https://example.com/plastic-products',
    },
    {
      image: commodity_chemicalsImage,
      name: 'Commodity Chemicals',
      description: 'Companies producing basic chemicals for industrial use.',
      points: [
        'Basic Chemicals',
        'Bulk Production',
        'Industrial Applications',
      ],
      link: 'https://example.com/commodity-chemicals',
    },
    {
      image: diversified_chemicalsImage,
      name: 'Diversified Chemicals',
      description: 'Companies involved in a range of chemical products and services.',
      points: [
        'Specialty Chemicals',
        'Bulk Chemicals',
        'Chemical Services',
      ],
      link: 'https://example.com/diversified-chemicals',
    },
    {
      image: fertilizers_agro_chemicalsImage,
      name: 'Fertilizers & Agro Chemicals',
      description: 'Companies producing fertilizers and chemicals for agricultural use.',
      points: [
        'Fertilizers',
        'Pesticides',
        'Agro Chemicals',
      ],
      link: 'https://example.com/fertilizers-agro-chemicals',
    },
    {
      image: cementImage,
      name: 'Cement',
      description: 'Companies involved in the production and distribution of cement.',
      points: [
        'Cement Manufacturing',
        'Construction Materials',
        'Infrastructure Development',
      ],
      link: 'https://example.com/cement',
    },
  ];

  return (
    <div className="stock-sectors">
      {sectorData.map((sector, index) => (
        <a key={index} href={sector.link} target="_blank" rel="noopener noreferrer" className="card-link">
          <div className="card sector-card">
            <img src={sector.image} className="card-img-top" alt={sector.name} />
            <div className="card-body">
              <h5 className="card-title">{sector.name}</h5>
              <p className="card-text text-muted">{sector.description}</p>
              <ul className="list-group list-group-flush">
                {sector.points.map((point, idx) => (
                  <li key={idx} className="list-group-item">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Stock;
