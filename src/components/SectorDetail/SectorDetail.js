import React from 'react';
import { useParams } from 'react-router-dom';
import './SectorDetail.css';

const sectorDetails = {
  'nifty50': {
    title: 'Nifty 50',
    description: 'Detailed analysis of Nifty 50.',
    content: 'Content about Nifty 50 goes here.'
  },
  'nifty100': {
    title: 'Nifty 100',
    description: 'Detailed analysis of Nifty 100.',
    content: 'Content about Nifty 100 goes here.'
  },
  'consumer-staples': {
    title: 'Consumer Staples',
    description: 'Detailed analysis of Consumer Staples.',
    content: 'Content about Consumer Staples goes here.'
  },
  'consumer-discretionary': {
    title: 'Consumer Discretionary',
    description: 'Detailed analysis of Consumer Discretionary.',
    content: 'Content about Consumer Discretionary goes here.'
  },
  'energy': {
    title: 'Energy',
    description: 'Detailed analysis of Energy.',
    content: 'Content about Energy goes here.'
  },
  'private-banks': {
    title: 'Private Banks',
    description: 'Detailed analysis of Private Banks.',
    content: 'Content about Private Banks goes here.'
  },
  'public-banks': {
    title: 'Public Banks',
    description: 'Detailed analysis of Public Banks.',
    content: 'Content about Public Banks goes here.'
  },
  'it-services': {
    title: 'IT Services & Consulting',
    description: 'Detailed analysis of IT Services & Consulting.',
    content: 'Content about IT Services & Consulting goes here.'
  },
  'software-services': {
    title: 'Software Services',
    description: 'Detailed analysis of Software Services.',
    content: 'Content about Software Services goes here.'
  },
  'iron-steel': {
    title: 'Iron & Steel',
    description: 'Detailed analysis of Iron & Steel.',
    content: 'Content about Iron & Steel goes here.'
  },
  'metals-specific': {
    title: 'Metals - Specific',
    description: 'Detailed analysis of Metals - Specific.',
    content: 'Content about Metals - Specific goes here.'
  },
  'metals-diversified': {
    title: 'Metals - Diversified',
    description: 'Detailed analysis of Metals - Diversified.',
    content: 'Content about Metals - Diversified goes here.'
  },
  'mining': {
    title: 'Mining',
    description: 'Detailed analysis of Mining.',
    content: 'Content about Mining goes here.'
  },
  'real-estate': {
    title: 'Real Estate',
    description: 'Detailed analysis of Real Estate.',
    content: 'Content about Real Estate goes here.'
  },
  'paper-products': {
    title: 'Paper Products',
    description: 'Detailed analysis of Paper Products.',
    content: 'Content about Paper Products goes here.'
  },
  'wood-products': {
    title: 'Wood Products',
    description: 'Detailed analysis of Wood Products.',
    content: 'Content about Wood Products goes here.'
  },
  'utilities': {
    title: 'Utilities',
    description: 'Detailed analysis of Utilities.',
    content: 'Content about Utilities goes here.'
  },
  'plastic-products': {
    title: 'Plastic Products',
    description: 'Detailed analysis of Plastic Products.',
    content: 'Content about Plastic Products goes here.'
  },
  'commodity-chemicals': {
    title: 'Commodity Chemicals',
    description: 'Detailed analysis of Commodity Chemicals.',
    content: 'Content about Commodity Chemicals goes here.'
  },
  'diversified-chemicals': {
    title: 'Diversified Chemicals',
    description: 'Detailed analysis of Diversified Chemicals.',
    content: 'Content about Diversified Chemicals goes here.'
  },
  'fertilizers-agro-chemicals': {
    title: 'Fertilizers & Agro Chemicals',
    description: 'Detailed analysis of Fertilizers & Agro Chemicals.',
    content: 'Content about Fertilizers & Agro Chemicals goes here.'
  },
  'cement': {
    title: 'Cement',
    description: 'Detailed analysis of Cement.',
    content: 'Content about Cement goes here.'
  },
};

const SectorDetail = () => {
  const { sectorName } = useParams();
  const sector = sectorDetails[sectorName];

  if (!sector) {
    return <div>Sector not found</div>;
  }

  return (
    <div className="sector-detail">
      <h1>{sector.title}</h1>
      <p>{sector.description}</p>
      <div>{sector.content}</div>
    </div>
  );
};

export default SectorDetail;
