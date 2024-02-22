import AdminContainer from "@/app/components/adminContainer/ui";
import styles from "./style.module.css";
import UserEdit from "@/app/components/userEdit/ui";

export default function User() {
  return (
    <AdminContainer>
      <main className={styles.userPage}>
        <div>
          <section>123</section>
        </div>
        <UserEdit />
      </main>
    </AdminContainer>
  );
}
