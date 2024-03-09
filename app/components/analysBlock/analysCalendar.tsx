import { Button } from "@mui/material";
import {
  LocalizationProvider,
  DatePickerToolbarProps,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import styles from "../../admin/analysis/style.module.css";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTime } from "luxon";
import { StepType } from "@/app/admin/analysis/page";

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

function ActionList(props: any) {
  const { onAccept, onClear, className } = props;
  return (
    // Propagate the className such that CSS selectors can be applied
    <div className={styles.actionBar}>
      <Button className={styles.actionBarCancel} onClick={onClear}>
        Сбросить
      </Button>
      <Button
        disabled={!props.ownerState.value}
        className={styles.actionBarAccept}
        style={{
          backgroundColor: !props.ownerState.value ? "#eee" : "#0D0D17",
        }}
        variant="contained"
        onClick={onAccept}
      >
        Продолжить
      </Button>
    </div>
  );
}

interface AnalysCalendarProps {
  setDate: (val: DateTime | null) => void;
  setStep: (val: any) => void;
}

const AnalysCalendar = ({ setDate, setStep }: AnalysCalendarProps) => {
  const handleSetDate = (value: DateTime<boolean> | null) => {
    setDate(value);
    if (value)
      setStep((val: StepType) => {
        return { ...val, value: 2 };
      });
  };

  return (
    <div className={styles.analys__content}>
      <h3 className={styles.analys__title}>Сделка в процедуре банкротства</h3>
      <div className={styles.analys__about}>
        <h5 className={styles.analys__aboutTitle}>Информация</h5>
        <p className={styles.analys__aboutTxt}>
          Введите дату совершения сделки и ответьте на вопросы чтобы узнать
          возможно ли оспорить сделку{" "}
        </p>
      </div>
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="ru">
        <StaticDatePicker
          onAccept={handleSetDate}
          disableFuture
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
  );
};

export default AnalysCalendar;
