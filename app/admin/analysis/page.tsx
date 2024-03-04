"use client";
import AdminContainer from "@/app/components/adminContainer/ui";
import Sidebar from "../../components/sidebar/ui";
import styles from "./style.module.css";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import {
  DateCalendar,
  LocalizationProvider,
  DatePickerToolbarProps,
  StaticDatePicker,
  PickersActionBarProps,
} from "@mui/x-date-pickers";
import { DateTime } from "luxon";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import AnalysLine from "@/app/components/analysLine/ui";

function ToolbarCalendar(props: DatePickerToolbarProps<DateTime>) {
  const { value, className } = props;
  return (
    // Propagate the className such that CSS selectors can be applied
    <div className={styles.analys__toolbar}>
      <div className={styles.analys__toolbarTitle}>
        <span>Выбранная дата</span>
      </div>

      <div className={styles.analys__toolbarDate}>
        <p className={styles.analys__toolbarDateItem}>
          {value ? (
            value.setLocale("ru").toLocaleString(DateTime.DATE_FULL)
          ) : (
            <span style={{ fontSize: "1.8em" }}>--</span>
          )}
        </p>
      </div>
    </div>
  );
}

function ActionList(props: PickersActionBarProps) {
  const { onAccept, onClear, onSetToday, className } = props;

  return (
    // Propagate the className such that CSS selectors can be applied
    <div className={styles.actionBar}>
      <Button className={styles.actionBarCancel} onClick={onSetToday}>
        Сбросить
      </Button>
      <Button
        className={styles.actionBarAccept}
        variant="contained"
        onClick={onAccept}
      >
        Продолжить
      </Button>
    </div>
  );
}

export default function Analysis() {
  return (
    <AdminContainer>
      <Container maxWidth="lg">
        <section className={styles.container}>
          <div className={styles.analys__container}>
            <div className={styles.analys__leftBlock}>
              <AnalysLine />
              <div className={styles.analys__illustration}>
                <Image
                  src="/analys_1.svg"
                  alt="analys illustration"
                  width={0}
                  height={0}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
            <div className={styles.analys__content}>
              <h3 className={styles.analys__title}>
                Сделка в процедуре банкротства
              </h3>
              <div className={styles.analys__about}>
                <h5 className={styles.analys__aboutTitle}>Информация</h5>
                <p className={styles.analys__aboutTxt}>
                  Введите дату совершения сделки и ответьте на вопросы чтобы
                  узнать возможно ли оспорить сделку{" "}
                </p>
              </div>
              <LocalizationProvider
                dateAdapter={AdapterLuxon}
                adapterLocale="ru"
              >
                <StaticDatePicker
                  slots={{
                    toolbar: ToolbarCalendar,
                    actionBar: ActionList,
                  }}
                  sx={{
                    ".MuiPickersDay-root": {
                      color: "#0D0D17",
                      borderRadius: 1,
                      fontFamily: "inherit",
                      fontWeight: "500",
                      borderWidth: 1,
                      border: "1px solid #EDEDED",
                    },
                    ".Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#0D0D17!important",
                    },
                  }}
                  className={styles.analys__date}
                  orientation="landscape"
                />
              </LocalizationProvider>
            </div>
          </div>
        </section>
      </Container>
    </AdminContainer>
  );
}
