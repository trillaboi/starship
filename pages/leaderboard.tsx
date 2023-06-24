import type { NextPage } from 'next';
import styles from '../styles/LeaderBoard.module.css';
import { NavBar } from "../components/NavBar";

const LeaderBoard: NextPage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.main}>
            <div className={styles.titleText}>
                Leaderboard
             </div>
            <div style={{display:"flex", flexDirection:"row", flexWrap: "wrap"}}>
                <div className-={styles.leaderCard}>
                    card
                </div>
            </div>
            </div>
        </div>
    )
}

export default LeaderBoard;