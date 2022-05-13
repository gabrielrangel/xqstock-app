import { Dispatch, SetStateAction } from "react";
import { IDateErrorInterface } from "./types";

export function validateDates(
  startDate: Date | null,
  setStartDateError: Dispatch<SetStateAction<IDateErrorInterface>>,
  endDate: Date | null,
  setEndDateError: Dispatch<SetStateAction<IDateErrorInterface>>
) {
  const startTime = startDate?.getTime() ?? null;
  const endTime = endDate?.getTime() ?? null;

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
    case endTime < startTime:
      return setEndDateError({
        hasError: true,
        helperText: "A data de término deve ser maior que a de início",
      });
  }
}
