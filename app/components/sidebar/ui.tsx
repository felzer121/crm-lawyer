"use client";
import Image from "next/image";
import styles from "./style.module.css";
import {
  ChartDonut,
  ArrowFatLineRight,
  AlignTop,
} from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@mui/material";

const Sidebar = () => {
  const pathname = usePathname();

  const getStyleName = (type: string, link: string) => {
    switch (type) {
      case "li": {
        if (link === pathname) return styles.sidebar__menuActiveItem;
        else return styles.sidebar__menuItem;
      }
      case "btn":
        if (link === pathname) return styles.sidebar__menuActiveItemBtn;
        else return styles.sidebar__menuItemBtn;
      default:
        break;
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logoContainer}>
        <Image
          src="/logo.png"
          className={styles.sidebar__logo}
          alt="Logo"
          width={52}
          height={52}
          priority
        />
      </div>
      <Button className={styles.sidebar__btnWidth}>
        <ArrowFatLineRight size={11} weight="fill" />
      </Button>
      <menu className={styles.sidebar__menu}>
        <li className={getStyleName("li", "/admin/analysis")}>
          <Link href={`analysis`} className={styles.sidebar__menuLink}>
            <Button className={getStyleName("btn", "/admin/analysis")}>
              <ChartDonut size={48} weight="fill" />
            </Button>
          </Link>
        </li>
        <li className={getStyleName("li", "/admin/page")}>
          <Link href={`page`} className={styles.sidebar__menuLink}>
            <Button className={getStyleName("btn", "/admin/page")}>
              <AlignTop size={48} weight="fill" />
            </Button>
          </Link>
        </li>
      </menu>
    </aside>
  );
};

export default Sidebar;
