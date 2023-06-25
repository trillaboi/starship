import MarketDetails from '../../components/MarketDetails';
import { useRouter } from 'next/router';

const MarketDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return <MarketDetails id={Number(id)}/>;
  };
  
  export default MarketDetailsPage;