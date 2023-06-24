import styles from "../styles/UserList.module.css"

interface Address {
    address: string;
    profit: number;
    volume: number;
  }
  
interface UserListProps {
users: Address[];
}

export function UsersListProfit({ users }: UserListProps) {
    return (
      <>
        {users.map((user, index) => (
              <div className={styles.itemContainer} key={index}>
                <div>{index + 1}</div>
                <div>{user.address}</div>
                <div>{user.profit}</div>
              </div>
        ))}
        </>
    );
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