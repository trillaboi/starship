import type { NextPage } from 'next';
import styles from '../styles/LeaderBoard.module.css';
import { NavBar } from "../components/NavBar";
import { UsersListProfit } from "../components/UsersListProfit";
import React, { useState } from 'react';

const LeaderBoard: NextPage = () => {
    interface Address {
        address: string;
        profit: number;
        volume: number;
      }
      
      const fakeAddresses: Address[] = [
        { address: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B', profit: 1000, volume: 5000 },
        { address: '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db', profit: 2000, volume: 8000 },
        { address: '0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB', profit: 1500, volume: 3000 },
        { address: '0x617F2E2fD72FD9D5503197092aC168c91465E7f2', profit: 2500, volume: 7000 },
        { address: '0x17F6AD8Ef982297579C203069C1DbfFE4348c372', profit: 1800, volume: 5500 },
        { address: '0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678', profit: 2200, volume: 9000 },
        { address: '0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7', profit: 1200, volume: 4000 },
        { address: '0x7aA3a964CC5B0a76550F549fc8F5cFE4af698d43', profit: 2800, volume: 6000 },
        { address: '0x8d12A197cB00D4747a1fe03395095ce2A5CC6819', profit: 1600, volume: 2500 },
        { address: '0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF', profit: 1900, volume: 3500 },
        { address: '0x6813Eb9362372EEF6200f3b1dbC3f819671cBA69', profit: 2400, volume: 4500 },
        { address: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C', profit: 2100, volume: 7000 },
        { address: '0x807D407A9A0d729cAF1f715F89D5520e1f5Fa8b8', profit: 1700, volume: 3200 },
        { address: '0x9B11EFcAAA1890f6eE52C6bB7CF8153aC5d74139', profit: 2300, volume: 5500 },
        { address: '0x59a5208B32e627891C389Ebaf0f6f42fDC2bD3ef', profit: 2000, volume: 4000 },
        { address: '0xd03ea8624C8C5987235048901fB614fDcA89b117', profit: 1500, volume: 3500 },
        { address: '0x95cED938F7991cd0dFcb48F0a06a40FA1aF46EBC', profit: 1800, volume: 5000 },
        { address: '0x0286cB5b0F1fE615d069eCc7f6D0Dffb6DDcEf32', profit: 2500, volume: 6000 },
        { address: '0x25f86d4C1a2F4fA63D6D3967740D9c52510bEe15', profit: 2200, volume: 4500 },
        { address: '0xa1a111bc074c9cfa781f0c38e63bd51cd2e887f3', profit: 1200, volume: 3000 }
      ];
      

    const [users, setUsers] = useState(fakeAddresses)

    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.main}>
            <div className={styles.titleText}>
                Leaderboard
             </div>
            <div className={styles.cardContainer}>
                <div className={styles.leaderCard}>
                    <UsersListProfit users={users} />
                </div>
                <div className={styles.leaderCard}>
                    <div>User1</div>
                    <div>User2</div>
                    <div>User3</div>
                    <div>User4</div>
                    <div>User5</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LeaderBoard;