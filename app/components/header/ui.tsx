"use client";
import {
  Button,
  ClickAwayListener,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import Image from "next/image";
import { ChatsCircle, BellSimple } from "@phosphor-icons/react/dist/ssr";
import styles from "./style.module.css";
import Link from "next/link";
import React from "react";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <header className={styles.header}>
      <Button className={styles.headerBtn}>
        <ChatsCircle size={32} weight="fill" />
      </Button>

      <Button
        className={styles.headerBtn}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <BellSimple size={32} weight="fill" />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{
          width: "100%",
          maxWidth: "200px",
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              marginTop: "1em",
              minHeight: "160px",
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  нет уведомлений
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <div className={styles.headerBalance}>
        <p className={styles.headerBalanceTxt}>Баланс</p>
        <p className={styles.headerBalance__number}>0₽</p>
      </div>
      <Link href={`user`}>
        <Button className={styles.headerAvatar}>
          <Image src="/avatar.svg" alt="Logo" width={54} height={54} priority />
        </Button>
      </Link>
    </header>
  );
};

export default Header;
