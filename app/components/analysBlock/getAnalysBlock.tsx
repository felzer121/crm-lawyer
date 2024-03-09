import { StepType } from "@/app/admin/analysis/page";
import { DateTime } from "luxon";
import AnalysCalendar from "./analysCalendar";
import AnalysSuccess from "./analysSuccess";
import AnalysQuestion from "./analysQuestion";
import React from "react";
import AnalysDecline from "./analysDecline";

interface getAnalysBlockProps {
  date: DateTime | null;
  step: StepType;
  setStep: (val: any) => void;
  setDate: (val: DateTime | null) => void;
}

const GetAnalysBlock = ({
  date,
  step,
  setDate,
  setStep,
}: getAnalysBlockProps) => {
  console.log(step);
  switch (step.variant) {
    case null: {
      return <AnalysCalendar setDate={setDate} setStep={setStep} />;
    }
    case "mouth": {
      return (
        <AnalysSuccess
          setStep={setStep}
          txt={
            "Любая сделка совершенная в течение месяца до принятия искового заявления либо после его принятия может быть оспорена."
          }
        />
      );
    }
    case "half-year": {
      if (step.question === null) {
        return (
          <AnalysQuestion
            setStep={setStep}
            step={step}
            info={{
              successButton: "Да",
              declineButton: "Нет",
              txt: "Сделка была проведена в течении полугода ответьте на несколько вопросов, чтобы узнать возможно ли оспорить сделку",
              question:
                "Денежные средства от сделки были направлены в адрес одного (отдельного кредитора)?",
            }}
          />
        );
      } else if (step.question === 1)
        return (
          <AnalysQuestion
            info={{
              successButton:
                "Родственнику или лицу прописанному по адресу должника",
              declineButton: "Иному лицу",
              txt: "Сделка была проведена в течении полугода ответьте на несколько вопросов, чтобы узнать возможно ли оспорить сделку",
              question: "Кому было продано?",
            }}
            setStep={setStep}
            step={step}
          />
        );
      else if (step.question === 2)
        return (
          <AnalysQuestion
            info={{
              successButton: "Да",
              declineButton: "Нет",
              txt: "Сделка была проведена в течении полугода ответьте на несколько вопросов, чтобы узнать возможно ли оспорить сделку",
              question:
                "Денежные средства от сделки были направлены в адрес одного (отдельного кредитора)?",
            }}
            setStep={setStep}
            step={step}
          />
        );
      else if (step.question === "success")
        return (
          <AnalysSuccess
            setStep={setStep}
            txt={
              "Так как денежные средства от реализации объекта были направлены в адрес одного кредитора, то сделка оспарима."
            }
          />
        );
      else if (step.question === "decline") {
        return (
          <AnalysDecline
            setStep={setStep}
            txt={
              "Так как было продано не родственнику или лицу не прописанному по адресу должника, то сделка неоспарима."
            }
          />
        );
      }
    }
    case "year": {
      if (step.question === null) {
        return (
          <AnalysQuestion
            setStep={setStep}
            step={step}
            info={{
              successButton: "Стоимость не соотвествовала рыночной",
              declineButton: "Стоимость была рыночной",
              txt: "Сделка была проведена в течении года ответьте на несколько вопросов, чтобы узнать возможно ли оспорить сделку",
              question:
                "Соответствует ли стоимость имущества рыночным условиям? (Стоимость сделки существенно в худшую для должника сторону отличается от цены, при которой в сравнимых обстоятельствах совершаются аналогичные сделки)",
            }}
          />
        );
      } else if (step.question === "success")
        return (
          <AnalysSuccess
            setStep={setStep}
            txt={
              "Так как цена существенно отличалась от рыночной, то сделка оспарима."
            }
          />
        );
      else if (step.question === "decline") {
        return (
          <AnalysDecline
            setStep={setStep}
            txt={"Так как цена продажи была рыночной, то сделка неоспарима."}
          />
        );
      }
    }
    case "old": {
      if (step.question === null) {
        return (
          <AnalysQuestion
            setStep={setStep}
            step={step}
            info={{
              successButton: "Родственнику или лицу с одной регистрацией",
              declineButton: "Иному лицу",
              txt: "Сделка была проведена в течении 3 лет ответьте на несколько вопросов, чтобы узнать возможно ли оспорить сделку",
              question: "Кому было продано?",
            }}
          />
        );
      } else if (step.question === 1) {
        return (
          <AnalysQuestion
            setStep={setStep}
            step={step}
            info={{
              successButton: "Единственное жилье",
              declineButton: "Не единственное жилье",
              txt: "Сделка была проведена в течении 3 лет ответьте на несколько вопросов, чтобы узнать возможно ли оспорить сделку",
              question: "Что было продано?",
            }}
          />
        );
      } else if (step.question === 2) {
        return (
          <AnalysQuestion
            setStep={setStep}
            step={step}
            info={{
              successButton:
                "Кредитов не было, и должник платил после сделки не менее 3 платежей по кредитам",
              declineButton: "Кредиты были и должник не оплачивал",
              txt: "Сделка была проведена в течении 3 лет ответьте на несколько вопросов, чтобы узнать возможно ли оспорить сделку",
              question:
                "Платил ли кредиты в момент продажи, были ли вообще кредиты на момент совершения сделки?",
            }}
          />
        );
      } else if (step.question === 3) {
        return (
          <AnalysQuestion
            setStep={setStep}
            step={step}
            info={{
              successButton: "Стоимость не соотвествовала рыночной",
              declineButton: "Стоимость была рыночной",
              txt: "Сделка была проведена в течении 3 лет ответьте на несколько вопросов, чтобы узнать возможно ли оспорить сделку",
              question:
                "Соответствует ли стоимость имущества рыночным условиям? (Стоимость сделки существенно в худшую для должника сторону отличается от цены, при которой в сравнимых обстоятельствах совершаются аналогичные сделки)",
            }}
          />
        );
      } else if (step.question === "success") {
        return (
          <AnalysSuccess
            setStep={setStep}
            txt={
              "Так как цена существенно отличалась от рыночной, то сделка оспарима."
            }
          />
        );
      } else if (step.question === "decline") {
        return (
          <AnalysDecline
            setStep={setStep}
            txt={
              "Так как продано было не родственнику и лицу не прописанному по адресу должника, то сделка неоспарима."
            }
          />
        );
      }
    }
  }
};

export default GetAnalysBlock;
