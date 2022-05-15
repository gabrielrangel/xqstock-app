import { Dispatch, SetStateAction } from "react";
import { IDateErrorInterface } from "./types";

export function validateDates(
  startDate: Date | null,
  setStartDateError: Dispatch<SetStateAction<IDateErrorInterface>>,
  endDate: Date | null,
  setEndDateError: Dispatch<SetStateAction<IDateErrorInterface>>
) {
  const startTime = startDate
    ? new Date(startDate.setHours(0, 0, 0, 0))?.getTime()
    : null;
  const endTime = endDate
    ? new Date(endDate.setHours(0, 0, 0, 0))?.getTime()
    : null;
  const now = new Date().setHours(0, 0, 0, 0);

  switch (true) {
    case endTime && !startTime:
      return setStartDateError({
        hasError: true,
        helperText: "Informe uma data de inicio",
      });
    case startTime && !endTime:
      return setEndDateError({
        hasError: true,
        helperText: "Informe uma data de término",
      });
    // @ts-ignore
    case isNaN(startTime):
      return setStartDateError({
        hasError: true,
        helperText: "Formato de data inválido",
      });
    // @ts-ignore
    case isNaN(endTime):
      return setEndDateError({
        hasError: true,
        helperText: "Formato de data inválido",
      });
    // @ts-ignore
    case endTime < startTime:
      return setEndDateError({
        hasError: true,
        helperText: "A data de término deve ser maior que a de início",
      });
    // @ts-ignore
    case endTime > now:
      return setEndDateError({
        hasError: true,
        helperText: "A data de término deve ser menor que hoje",
      });
    default:
      setStartDateError({ hasError: false });
      setEndDateError({ hasError: false });
  }
}
