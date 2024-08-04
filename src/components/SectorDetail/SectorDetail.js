import React from 'react';
import { useParams } from 'react-router-dom';
import './SectorDetail.css';

const sectorDetails = {
  'nifty50': {
    title: <b>Nifty50</b>,
    content: (
      <ul>
        <li><b>What is Nifty50:</b> It’s an index of the 50 largest and most liquid companies listed on the NSE of India.</li>
        <li><b>Type of Stocks Included:</b> It features top companies from diverse sectors like finance, IT, and healthcare.</li>
        <li><b>How Nifty50 Works:</b> It’s calculated based on free-float market capitalization and updated regularly; stocks are reviewed and can be changed every 6 months.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors seeking diversified exposure to the Indian market with a long-term perspective.</li>
      </ul>
    ),
  },
  'nifty100': {
    title: <b>Nifty100</b>,
    content: (
      <ul>
        <li><b>What is Nifty100:</b> It’s an index representing the top 100 companies listed on the NSE of India, providing a broader market view.</li>
        <li><b>Type of Stocks Included:</b> It features a wider range of large-cap companies from various sectors, offering a more comprehensive market representation.</li>
        <li><b>How Nifty100 Works:</b> It’s a market-capitalization-weighted index, reviewed semi-annually to include the top 100 companies based on performance and liquidity.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors looking for a diversified investment in large-cap companies, aiming for long-term growth and stability.</li>
      </ul>
    ),
  },
  'consumer-staples': {
    title: <b>Consumer Staples</b>,
    content: (
      <ul>
        <li><b>What is Consumer Staples:</b> These are essential products that people regularly buy and use, such as food, beverages, household items, and personal care products.</li>
        <li><b>Type of Stocks Included:</b> It includes companies producing and distributing everyday necessities, ensuring consistent demand regardless of economic conditions.</li>
        <li><b>How Consumer Staples Sector Works:</b> The sector tends to be more stable and less sensitive to economic cycles, providing steady returns and lower volatility.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for conservative investors seeking stability and reliable returns, focusing on long-term investment in essential goods providers.</li>
      </ul>
    ),
  },
  'consumer-discretionary': {
    title: <b>Consumer Discretionary</b>,
    content: (
      <ul>
        <li><b>What is Consumer Discretionary:</b> These are non-essential goods and services that consumers buy with discretionary income, including automobiles, leisure activities, and luxury items.</li>
        <li><b>Type of Stocks Included:</b> It features companies from sectors such as automobiles and auto parts, leisure and educational services, and retail and apparel.</li>
        <li><b>How Consumer Discretionary Sector Works:</b> This sector is more sensitive to economic cycles, performing well in economic upswings when consumers have more disposable income.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors seeking growth opportunities with higher risk tolerance, focusing on sectors driven by consumer spending and economic trends.</li>
      </ul>
    ),
  },
  'energy': {
    title: <b>Energy</b>,
    content: (
      <ul>
        <li><b>What is the Energy Sector:</b> This sector includes companies involved in various aspects of energy production, distribution, and supply, covering both fossil fuels and renewable energy sources.</li>
        <li><b>Type of Stocks Included:</b> It features companies in oil & gas equipment, oil & gas production, oil & gas refining and marketing, and oil & gas storage and transportation.</li>
        <li><b>How the Energy Sector Works:</b> The sector is influenced by global energy demand, geopolitical events, and technological advancements, affecting the production and distribution of energy resources.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors seeking exposure to essential commodities with an understanding of market volatility, focusing on long-term trends and innovations in the energy industry.</li>
      </ul>
    ),
  },
  'private-banks': {
    title: <b>Private Banks</b>,
    content: (
      <ul>
        <li><b>What are Private Banks:</b> These are financial institutions owned by private entities that provide banking services such as loans, deposits, and wealth management.</li>
        <li><b>Type of Stocks Included:</b> It features stocks of banks that are privately managed, offering services like retail banking, corporate banking, and investment banking.</li>
        <li><b>How the Private Banks Sector Works:</b> The sector's performance is driven by factors such as interest rates, regulatory policies, economic conditions, and the banks' financial health and management efficiency.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors seeking growth through financial sector exposure, focusing on the stability and profitability of private banking institutions.</li>
      </ul>
    ),
  },
  'public-banks': {
    title: <b>Public Banks</b>,
    content: (
      <ul>
        <li><b>What are Public Banks:</b> These are financial institutions owned and operated by the government, providing a range of banking services including loans, deposits, and government-related financial activities.</li>
        <li><b>Type of Stocks Included:</b> It features stocks of banks that are government-owned or controlled, offering services such as retail banking, corporate banking, and government financing.</li>
        <li><b>How the Public Banks Sector Works:</b> The sector's performance is influenced by government policies, regulatory changes, economic conditions, and the banks' operational efficiency and public sector mandates.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors seeking stability and consistent dividends from government-backed institutions, with a focus on long-term reliability and public sector involvement.</li>
      </ul>
    ),
  },
  'it-services': {
    title: <b>IT Services & Consulting</b>,
    content: (
      <ul>
        <li><b>What are IT Services & Consulting:</b> Comprises companies offering IT solutions, consulting, and outsourcing services.</li>
        <li><b>Type of Stocks Included:</b> Features top firms like TCS, Infosys, and Wipro providing IT consulting, cloud services, and digital transformation.</li>
        <li><b>How the IT Services & Consulting Sector Works:</b> Driven by global tech trends and corporate IT spending, evaluated on revenue growth, profit margins, and innovation.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for long-term investors seeking exposure to India's tech industry and global IT service demand.</li>
      </ul>
    ),
  },
  'software-services': {
    title: <b>Software Services</b>,
    content: (
      <ul>
        <li><b>What are Software Services:</b> Encompasses companies focused on software development, maintenance, and support.</li>
        <li><b>Type of Stocks Included:</b> Includes major players like Infosys, TCS, and HCL Technologies specializing in software products and solutions.</li>
        <li><b>How the Software Services Sector Works:</b> Influenced by tech advancements, client acquisitions, and innovation, measured by revenue growth and product adoption.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors looking for long-term gains from the growth in software services and digital transformation initiatives.</li>
      </ul>
    ),
  },
  'iron-steel': {
    title: <b>Iron & Steel</b>,
    content: (
      <ul>
        <li><b>What is Iron & Steel Sector:</b> The Iron & Steel sector includes companies involved in the production and processing of iron and steel products.</li>
        <li><b>Type of Stocks Included:</b> This sector features leading firms like Tata Steel, JSW Steel, and SAIL, which produce steel products used in the construction, automotive, and manufacturing industries.</li>
        <li><b>How the Iron & Steel Sector Works:</b> The performance of this sector is influenced by factors like raw material prices, demand from key industries, and global economic conditions. Companies are evaluated based on production capacity, cost efficiency, and market demand.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors with a medium to long-term horizon, seeking exposure to the industrial and construction sectors. Investments should be made with an understanding of the cyclical nature of the industry.</li>
      </ul>
    ),
  },
  'metals-specific': {
    title: <b>Metal Specific</b>,
    content: (
      <ul>
        <li><b>What is Metal Specific:</b> The Metal Specific sector consists of companies focusing on extracting, producing, and processing a single type of metal.</li>
        <li><b>Type of Stocks Included:</b> Includes companies like Hindalco (aluminium) and Gravita India (lead). These firms specialize in the production and supply of a specific metal.</li>
        <li><b>How the Metal-Specific Sector Works:</b> Performance is driven by the supply-demand dynamics of the particular metal, global prices, and industry-specific trends. Companies are evaluated based on their production efficiency, reserves, and market share.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors seeking targeted exposure to specific metals. This sector is ideal for those with a focused investment approach and a keen understanding of the market dynamics of the chosen metal.</li>
      </ul>
    ),
  },
  'metals-diversified': {
    title: <b>Metal Diversified</b>,
    content: (
      <ul>
        <li><b>What are Metal Diversified:</b> The Metal Diversified sector includes companies that deal with multiple metals, offering a diversified portfolio of metal products.</li>
        <li><b>Type of Stocks Included:</b> Features companies like Vedanta and Hindustan Zinc, which produce a variety of metals such as copper, aluminium, zinc, and lead.</li>
        <li><b>How the Metal Diversified Sector Works:</b> Performance is influenced by the combined dynamics of multiple metal markets, global economic conditions, and industrial demand. These companies are assessed based on their diversified production capabilities, cost management, and market reach.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors looking for diversified exposure to the metal industry, reducing the risk associated with reliance on a single metal. This sector is suitable for those with a long-term investment horizon and a balanced risk-reward approach.</li>
      </ul>
    ),
  },
  'mining': {
    title: <b>Mining</b>,
    content: (
      <ul>
        <li><b>What is the Mining Sector:</b> The Mining sector includes companies involved in the extraction and processing of minerals and ores.</li>
        <li><b>Type of Stocks Included:</b> Features key players like NMDC (iron ore), and Coal India (coal), focusing on mineral extraction and supply.</li>
        <li><b>How the Mining Sector Works:</b> Performance is influenced by global commodity prices, supply-demand balance, and regulatory factors. Companies are evaluated based on their resource reserves, production efficiency, and market demand.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors interested in the commodity market and looking for opportunities tied to global economic growth and infrastructure development. This sector is ideal for those with a long-term view and an understanding of commodity cycles.</li>
      </ul>
    ),
  },
  'real-estate': {
    title: <b>Real Estate</b>,
    content: (
      <ul>
        <li><b>What is Real Estate:</b> The Real Estate sector comprises companies involved in property development, construction, and management.</li>
        <li><b>Type of Stocks Included:</b> Includes major firms like DLF, Brigade Enterprises, and Oberoi Realty, focusing on residential, commercial, and retail property development.</li>
        <li><b>How the Real Estate Sector Works:</b> Driven by factors like economic growth, interest rates, and urbanization trends. Companies are assessed based on their project pipeline, property portfolio, and market demand.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors seeking exposure to property markets and urban development. This sector suits those with a long-term investment horizon who believe in the growth of real estate and infrastructure.</li>
      </ul>
    ),
  },
  'paper-products': {
    title: <b>Paper Products</b>,
    content: (
      <ul>
        <li><b>What are Paper Products:</b> The Paper Products sector includes companies engaged in the production and processing of paper and paper-based products.</li>
        <li><b>Type of Stocks Included:</b> Features companies like ITC, JK Paper, and Ballarpur Industries, which produce various paper products used in packaging, printing, and hygiene.</li>
        <li><b>How the Paper Products Sector Works:</b> Performance is influenced by factors like raw material costs, demand from end-user industries, and environmental regulations. Companies are evaluated based on production capacity, cost management, and market demand.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors interested in the consumer and industrial goods markets, looking for steady returns and growth. This sector is ideal for those with a long-term investment perspective and an understanding of demand for paper products.</li>
      </ul>
    ),
  },
  'wood-products': {
    title: <b>Wood Products</b>,
    content: (
      <ul>
        <li><b>What are Wood Products:</b> The Wood Products sector includes companies engaged in the production and processing of wood and wood-based products.</li>
        <li><b>Type of Stocks Included:</b> Features companies like Greenply Industries and Century Plyboards, specializing in plywood, MDF boards, and other wood products.</li>
        <li><b>How the Wood Products Sector Works:</b> Performance is influenced by factors such as raw material availability, construction demand, and environmental regulations. Companies are evaluated based on production capacity, cost management, and market demand.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors interested in the construction and interior design markets. This sector is ideal for those with a long-term investment horizon who believe in the growth of the real estate and construction industries.</li>
      </ul>
    ),
  },
  'plastic-products': {
    title: <b>Plastic Products</b>,
    content: (
      <ul>
        <li><b>What are Plastic Products:</b> The Plastic Products sector comprises companies that manufacture and process plastic materials and products.</li>
        <li><b>Type of Stocks Included:</b> Includes major firms like Supreme Industries, Finolex Industries, and Astral Poly Technik, focusing on plastic packaging, pipes, and consumer products.</li>
        <li><b>How the Plastic Products Sector Works:</b> Driven by factors such as raw material prices, demand from various industries, and regulatory changes. Companies are assessed based on production efficiency, market demand, and innovation in plastic products.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors seeking exposure to the consumer goods and packaging industries. This sector suits those with a long-term view who believe in the continued demand for plastic products and innovations.</li>
      </ul>
    ),
  },
  'utilities': {
    title: <b>Utilities</b>,
    content: (
      <ul>
        <li><b>What are Utilities:</b> The Utilities sector includes companies that provide essential services such as electricity, water, and natural gas.</li>
        <li><b>Type of Stocks Included:</b> Features major firms like NTPC, Power Grid Corporation, and Adani Transmission, focusing on energy generation, transmission, and distribution.</li>
        <li><b>How the Utilities Sector Works:</b> Driven by factors like government regulations, infrastructure investments, and demand for essential services. Companies are assessed based on their service reliability, regulatory compliance, and revenue stability.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors seeking stable returns and steady income, given the sector’s essential nature. Suitable for those with a long-term investment horizon and a preference for less volatile investments.</li>
      </ul>
    ),
  },
  'commodity-chemicals': {
    title: <b>Commodity Chemicals</b>,
    content: (
      <ul>
        <li><b>What are Commodity Chemicals:</b> The Commodity Chemicals sector comprises companies producing bulk chemicals used in various industries, including manufacturing and agriculture.</li>
        <li><b>Type of Stocks Included:</b> Includes companies like Castrol India and Deepak Nitrite, focusing on basic chemicals such as chlorine, soda ash, and industrial solvents.</li>
        <li><b>How the Commodity Chemicals Sector Works:</b> Performance is influenced by global chemical prices, demand from industrial sectors, and raw material costs. Companies are evaluated based on production capacity, cost efficiency, and market demand.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors looking for exposure to basic chemical industries and global commodity markets. Ideal for those with a long-term perspective and an understanding of cyclical commodity trends.</li>
      </ul>
    ),
  },
  'diversified-chemicals': {
    title: <b>Diversified Chemicals</b>,
    content: (
      <ul>
        <li><b>What are Diversified Chemicals:</b> The Diversified Chemicals sector includes companies with a broad range of chemical products across different applications and industries.</li>
        <li><b>Type of Stocks Included:</b> Features companies like Pidilite Industries, Tata Chemicals, and SRF, which produce a wide variety of chemicals, including specialty and industrial chemicals.</li>
        <li><b>How the Diversified Chemicals Sector Works:</b> Performance is influenced by global chemical demand, innovation, and diversification strategies. Companies are assessed based on their product range, market reach, and R&D capabilities.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors seeking diversified exposure to the chemical industry. Suitable for those with a long-term investment outlook who believe in the growth and innovation within the chemical sector.</li>
      </ul>
    ),
  },
  'fertilizers-agro-chemicals': {
    title: <b>Fertilizers & Agro Chemicals</b>,
    content: (
      <ul>
        <li><b>What are Fertilizers & Agro Chemicals:</b> The Fertilizers & Agro Chemicals sector includes companies that produce fertilizers and agrochemicals for agricultural use.</li>
        <li><b>Type of Stocks Included:</b> Includes companies like Bayer Cropscience, UPL, and Chambal Fertilizers, focusing on products like nitrogenous fertilizers, pesticides, and herbicides.</li>
        <li><b>How the Fertilizers & Agro Chemicals Sector Works:</b> Driven by agricultural demand, government policies, and raw material costs. Companies are evaluated based on their product offerings, market demand, and agricultural trends.</li>
        <li><b>Who Should Invest and Mindset:</b> Suitable for investors interested in agriculture and its related industries. Ideal for those with a long-term view who believe in the ongoing need for agricultural productivity and crop protection.</li>
      </ul>
    ),
  },
  'cement': {
    title: <b>Cement</b>,
    content: (
      <ul>
        <li><b>What is Cement:</b> The Cement sector includes companies involved in the production and supply of cement and related building materials.</li>
        <li><b>Type of Stocks Included:</b> Features major firms like Ultratech Cement, ACC, and Ambuja Cements, focusing on cement production for construction and infrastructure projects.</li>
        <li><b>How the Cement Sector Works:</b> Performance is influenced by factors such as construction activity, infrastructure development, and raw material costs. Companies are assessed based on production capacity, market share, and cost efficiency.</li>
        <li><b>Who Should Invest and Mindset:</b> Ideal for investors looking to benefit from infrastructure development and real estate growth. Suitable for those with a long-term perspective who believe in the growth of the construction and infrastructure sectors.</li>
      </ul>
    ),
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
