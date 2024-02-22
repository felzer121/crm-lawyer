import Header from "../header/ui";
import Sidebar from "../sidebar/ui";
import styles from "./style.module.css";
import { ReactNode } from "react";

interface AdminContainerProps {
  children: ReactNode;
}

const AdminContainer = ({ children }: AdminContainerProps) => {
  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.adminContainer__block}>
        <Header />
        <main className={styles.adminContainer__content}>{children}</main>
      </div>
    </div>
  );
};

export default AdminContainer;
