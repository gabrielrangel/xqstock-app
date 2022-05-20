import { Dispatch, SetStateAction } from "react";
import { SymbolMetadataState } from "src/Reducers/SymbolMetadataReducer";
import fetchOptions from "../../../Services/XqStockApi/searchByKeyword";

export function updateOptions(
  inputValue: string,
  options: SymbolMetadataState,
  setOptions: Dispatch<SetStateAction<SymbolMetadataState>>
) {
  if (inputValue) {
    fetchOptions(inputValue).then(([newOptions]) => {
      const filteredNewOptions = newOptions.filter(
        (o) => !options.some(({ Symbol }) => Symbol === o.Symbol)
      );

      const mergedOptions = [...filteredNewOptions, ...options].sort((a, b) =>
        a.Symbol.localeCompare(b.Symbol)
      );

      setOptions(mergedOptions);
    });
  }
}

export default updateOptions;
