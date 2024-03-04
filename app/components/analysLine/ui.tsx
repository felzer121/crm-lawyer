import {
  ArrowsSplit,
  Calendar,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./style.module.css";
import { Stepper, Step, StepLabel, StepIconProps, styled } from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 26,
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#754DCE",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 11,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#EDEDED",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#fff",
  border: "solid 1px #E0E0E0",
  color: "#616161",
  zIndex: 1,
  width: 64,
  height: 64,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.completed && {
    backgroundColor: "#754DCE",
    color: "#fff",
    border: "solid 2px #fff",
  }),
}));

function StepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Calendar size={32} weight="fill" />,
    2: <ArrowsSplit size={32} weight="fill" />,
    3: <ArrowsSplit size={32} weight="fill" />,
    4: <CheckCircle size={32} weight="fill" />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["1", "2", "3", "4"];

const AnalysLine = () => {
  return (
    <div className={styles.analys__line}>
      <Stepper
        alternativeLabel
        activeStep={1}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
export default AnalysLine;
