import { Button } from "@mui/material";
import Image from "next/image";
import { ChatsCircle } from "@phosphor-icons/react/dist/ssr";
import styles from "./style.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Button className={styles.headerBtn}>
        <ChatsCircle size={32} weight="fill" />
      </Button>
      <Link href={`user`}>
        <Button className={styles.headerAvatar}>
          <Image src="/avatar.svg" alt="Logo" width={54} height={54} priority />
        </Button>
      </Link>
    </header>
  );
};

export default Header;
