"use client";
import AdminContainer from "@/app/components/adminContainer/ui";
import Sidebar from "../../components/sidebar/ui";
import styles from "./style.module.css";
import {
  Alert,
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
import React, { useEffect } from "react";
import AnalysCalendar from "@/app/components/analysBlock/analysCalendar";
import AnalysSuccess from "@/app/components/analysBlock/analysSuccess";
import dynamic from "next/dynamic";

const DynamicGetAnalysBlock = dynamic(
  () => import("@/app/components/analysBlock/getAnalysBlock"),
  {
    ssr: false,
  }
);

export interface StepType {
  value: number;
  question: null | number | "success" | "decline";
  variant: "old" | "year" | "half-year" | "mouth" | null;
}

export default function Analysis() {
  const [step, setStep] = React.useState<StepType>({
    value: 1,
    variant: null,
    question: null,
  });
  const [date, setDate] = React.useState<DateTime | null>(null);

  React.useEffect(() => {
    if (date) {
      if (date.plus({ days: 30 }) > DateTime.now())
        setStep((val) => {
          return { ...val, variant: "mouth", value: 4 };
        });
      else if (date.plus({ month: 6 }) > DateTime.now())
        setStep((val) => {
          return { ...val, variant: "half-year", value: 2 };
        });
      else if (date.plus({ year: 1 }) > DateTime.now())
        setStep((val) => {
          return { ...val, variant: "year", value: 2 };
        });
      else
        setStep((val) => {
          return { ...val, variant: "old", value: 2 };
        });
    }
  }, [date]);
  return (
    <AdminContainer>
      <Container maxWidth="lg">
        <section className={styles.container}>
          <div className={styles.analys__container}>
            <div className={styles.analys__leftBlock}>
              <AnalysLine step={step.value} />
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
            <DynamicGetAnalysBlock
              date={date}
              step={step}
              setStep={setStep}
              setDate={setDate}
            />
          </div>
        </section>
      </Container>
    </AdminContainer>
  );
}
