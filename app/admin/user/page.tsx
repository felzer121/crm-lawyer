import AdminContainer from "@/app/components/adminContainer/ui";
import styles from "./style.module.css";
import UserEdit from "@/app/components/userEdit/ui";
import Subscription from "@/app/components/subscription/ui";
import UserBalance from "@/app/components/userBalance/ui";

export default function User() {
  return (
    <AdminContainer>
      <main className={styles.userPage}>
        <div className={styles.userController}>
          <Subscription />
          <UserBalance />
        </div>
        <UserEdit />
      </main>
    </AdminContainer>
  );
}
