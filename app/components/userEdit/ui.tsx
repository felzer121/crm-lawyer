"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { Button, TextField, styled } from "@mui/material";
import { VisuallyHiddenInput } from "./hideImput";

const AuthInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInputBase-root-MuiFilledInput": {
    fontFamily: "inherit",
    borderColor: "#fff",
  },
  "& .MuiFilledInput-root:after": { borderBottom: "2px solid #000;" },
  "& .MuiFilledInput-root:before": { borderColor: "#E3E3E3;" },
  "& .MuiInputLabel-formControl": {
    fontFamily: "inherit",
    fontWeight: 600,
  },
  "& .MuiInputBase-root ": {
    fontFamily: "inherit",
  },
  "& .MuiInputBase-input": {
    borderColor: "#000",
    fontFamily: "inherit",
    backgroundColor: "#FAFAFA ",
  },
});

const UserEdit = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerAvatar}>
        <Image
          src="/avatar.svg"
          className={styles.sidebar__logo}
          alt="avatar"
          width={100}
          height={100}
          priority
        />
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          className={styles.avatarBtn}
        >
          Загрузить изображение
          <VisuallyHiddenInput type="file" />
        </Button>
      </div>
      <div className={styles.userEdit__block}>
        <div className={styles.userEdit__title}>
          <h3 className={styles.userEdit__titleTxt}>персональная информация</h3>
        </div>
        <div className={styles.userEdit__inputs}>
          <div className={styles.userEdit__input}>
            <span className={styles.userEdit__inputSpan}>Имя*</span>
            <AuthInput id="name" label="Имя" variant="filled" />
          </div>
          <div className={styles.userEdit__input}>
            <span className={styles.userEdit__inputSpan}>Телефон*</span>
            <AuthInput id="phone" label="Телефон" variant="filled" />
          </div>
          <div className={styles.userEdit__input}>
            <span className={styles.userEdit__inputSpan}>Адрес*</span>
            <AuthInput id="adress" label="Адрес" variant="filled" />
          </div>
          <div className={styles.userEdit__input}>
            <span className={styles.userEdit__inputSpan}>Email*</span>
            <AuthInput id="email" label="Email" variant="filled" />
          </div>
        </div>
      </div>
      <div className={styles.userEdit__block}>
        <div className={styles.userEdit__title}>
          <h3 className={styles.userEdit__titleTxt}>параметры Входа</h3>
        </div>
      </div>
      <div className={styles.userEdit__block}>
        <div className={styles.userEdit__title}>
          <h3 className={styles.userEdit__titleTxt}>Возможности для бизнеса</h3>
        </div>
        <div className={styles.userEdit__business}>
          <span className={styles.userEdit__subTitle}>
            Вы можете добавить информацию о своей компании и товарах, чтобы
            получать рекомендации, которые помогут вам находить новых клиентов
          </span>
        </div>
      </div>
    </section>
  );
};

export default UserEdit;
