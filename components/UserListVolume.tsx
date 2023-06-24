import styles from "../styles/UserList.module.css"

interface Address {
    address: string;
    profit: number;
    volume: number;
  }
  
interface UserListProps {
users: Address[];
}

export function UsersListVolume({ users }: UserListProps) {
    return (
      <>
        {users.map((user, index) => (
              <div className={styles.itemContainer} key={index}>
                <div>{index + 1}</div>
                <div>{user.address}</div>
                <div>{user.volume}</div>
              </div>
        ))}
        </>
    );
  }