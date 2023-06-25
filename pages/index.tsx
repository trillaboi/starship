import { ConnectButton } from '@rainbow-me/rainbowkit';

import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { NavBar } from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        <div style={{display:"flex", flexDirection:"column"}}>
          <div className={styles.title}>
            Starship
          </div>
          <div className={styles.description}>
            A decentralized prediction marketplace.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
