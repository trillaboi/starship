import { useEffect, useState } from 'react';

interface Market {
    id: number;
    title: string;
    description: string;

  }
const MarketDetails = ({ id }: { id: number }) => {
    const [market, setMarket] = useState<Market | null>(null);
  
    useEffect(() => {
      const fetchMarketDetails = async () => {
        const marketDetails = await fetch(`/api/markets/${id}`);
        const marketData = await marketDetails.json();
        setMarket(marketData);
      };
  
      if (id) {
        fetchMarketDetails();
      }
    }, [id]);
  
    if (!market) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>{market.title}</h2>
        <p>{market.description}</p>
      </div>
    );
  };
  
  export default MarketDetails;