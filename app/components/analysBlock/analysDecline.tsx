import { Alert, Button } from "@mui/material";
import styles from "../../admin/analysis/style.module.css";

interface AnalysDeclineProps {
  txt: string;
  setStep: (val: any) => void;
}

const AnalysDecline = ({ txt, setStep }: AnalysDeclineProps) => {
  const handleReturn = () => {
    setStep({
      value: 1,
      variant: null,
      question: null,
    });
  };
  return (
    <div className={styles.analys__content}>
      <h3 className={styles.analys__title}>Сделка в процедуре банкротства</h3>
      <div className={styles.analys__about}>
        <h5 className={styles.analys__aboutTitle}>Информация</h5>
        <p className={styles.analys__aboutTxt}>{txt}</p>
      </div>
      <div className={styles.analys__success}>
        <div>
          <Alert
            severity="error"
            sx={{
              padding: "1.5em 1em",
              width: "100%",
              fontSize: "1.2em",
              alignItems: "center",
              fontFamily: "inherit",
              fontWeight: "500",
            }}
          >
            Данная сделка не оспарима
          </Alert>
        </div>

        <Button
          onClick={handleReturn}
          sx={{
            fontFamily: "inherit",
            color: "#0D0D17",
            fontSize: "1em",
            marginBottom: "2em",
            padding: "20px 0",
          }}
        >
          Вернуться
        </Button>
      </div>
    </div>
  );
};

export default AnalysDecline;
