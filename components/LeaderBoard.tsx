import { NavBar } from "../components/NavBar"
import { VStack, Text } from "@chakra-ui/react";
import styles from "../styles/LeaderBoard.module.css";

 const LeaderBoard = () => {
    return (
        <div className={styles.container}>
            <div>
                <NavBar />
            </div>
        </div>
    );
}

export default LeaderBoard;