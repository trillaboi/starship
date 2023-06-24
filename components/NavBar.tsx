import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, Image, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "../styles/NavBar.module.css";
import { CustomDrawer }  from "../components/CustomDrawer"

export const NavBar = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
            <div className={styles.navbar}>
                <Link href="/" className={styles.homeLogo}>
                    <Image alt="home" src="/assets/logo.svg" />
                </Link>

                <div style={{display:"flex", alignItems:"center", gap:"30px"}}>
                    <ConnectButton />
                    <HamburgerIcon
                        className={styles.iconStyle}
                        onClick={onOpen}  
                        h={10}
                        w={10}
                        color="black"
                     />
                </div>
                <CustomDrawer 
                    isOpen={isOpen}
                    onClose={onClose}
                />
            </div>
    );

}