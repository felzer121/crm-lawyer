import { Alert, Button } from "@mui/material";
import styles from "../../admin/analysis/style.module.css";
import { StepType } from "@/app/admin/analysis/page";

interface InfoType {
  txt: string;
  question: string;
  successButton: string;
  declineButton: string;
}

interface AnalysQuestionProps {
  info: InfoType;
  step: StepType;
  setStep: (val: any) => void;
}

const getQuestion = (step: StepType, value: boolean) => {
  switch (step.variant) {
    case "half-year":
      if (step.question === null && value === true)
        return { value: 4, question: "success" };
      else if (step.question === null && value === false)
        return { value: 3, question: 1 };
      else if (step.question === 1 && value === true)
        return { value: 3, question: 2 };
      else if (step.question === 1 && value === false)
        return { value: 4, question: "decline" };
      else if (step.question === 2 && value === false)
        return { value: 4, question: "decline" };
      else if (step.question === 2 && value === true)
        return { value: 4, question: "success" };
    case "year":
      if (step.question === null && value === true)
        return { value: 4, question: "success" };
      else if (step.question === null && value === false)
        return { value: 4, question: "decline" };
    case "old":
      if (step.question === null && value === true)
        return { value: 3, question: 1 };
      else if (step.question === null && value === false)
        return { value: 4, question: "decline" };
      else if (step.question === 1 && value === true)
        return { value: 4, question: "decline" };
      else if (step.question === 1 && value === false)
        return { value: 4, question: 2 };
      else if (step.question === 2 && value === true)
        return { value: 4, question: "decline" };
      else if (step.question === 2 && value === false)
        return { value: 4, question: 3 };
      else if (step.question === 3 && value === true)
        return { value: 4, question: "success" };
      else if (step.question === 3 && value === false)
        return { value: 4, question: "decline" };
    default:
      break;
  }
};

const AnalysQuestion = ({ info, step, setStep }: AnalysQuestionProps) => {
  const handleSucces = () => {
    setStep((val: any) => {
      return { ...val, ...getQuestion(step, true) };
    });
  };
  const handleDecline = () => {
    setStep((val: any) => {
      return { ...val, ...getQuestion(step, false) };
    });
  };
  return (
    <div className={styles.analys__content}>
      <h3 className={styles.analys__title}>Сделка в процедуре банкротства</h3>
      <div className={styles.analys__about}>
        <h5 className={styles.analys__aboutTitle}>Информация</h5>
        <p className={styles.analys__aboutTxt}>{info.txt}</p>
      </div>
      <Alert
        severity="info"
        sx={{
          fontSize: "1em",
          fontWeight: "500",
          fontFamily: "inherit",
        }}
      >
        {info.question}
      </Alert>
      <div className={styles.analys__question}>
        <div className={styles.analys__questionContainer}>
          <Button
            variant="outlined"
            onClick={handleSucces}
            sx={{
              padding: "1.5em 1em",
              fontFamily: "inherit",
              color: "#0D0D17",
              width: "100%",
              borderColor: "#eee",
              fontSize: "1em",
            }}
          >
            {info.successButton}
          </Button>
          <Button
            variant="outlined"
            onClick={handleDecline}
            sx={{
              padding: "1.5em 1em",
              fontFamily: "inherit",
              borderColor: "#eee",
              width: "100%",
              color: "#0D0D17",
              fontSize: "1em",
            }}
          >
            {info.declineButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysQuestion;
