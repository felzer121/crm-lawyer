import styles from "./style.module.css";
import Image from "next/image";
import svgIcon from "../../../public/premiumSubscription.svg";
import { Button } from "@mui/material";
import { PencilSimpleLine } from "@phosphor-icons/react/dist/ssr";

const Subscription = () => {
  return (
    <section className={styles.container}>
      <Image
        src={svgIcon}
        alt="Подписка"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      />
      <div className={styles.changeSubscription}>
        <div className={styles.changeSubscriptionTitle}>
          <span className={styles.changeSubscriptionSubtitle}>подписка</span>
          <div className={styles.changeSubscriptionTitleBlock}>
            <span className={styles.changeSubscriptionTxt}>Премиум</span>
            <span className={styles.changeSubscriptionPrice}>1,500₽ / мес</span>
          </div>
        </div>
        <Button variant="contained" className={styles.changeSubscriptionBtn}>
          <PencilSimpleLine size={20} weight="fill" />
          Изменить
        </Button>
      </div>
    </section>
  );
};

export default Subscription;
