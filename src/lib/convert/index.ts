import { bankOfAmericaConverter } from "./converter.bank-of-america";
import { Converter } from "./types";

const converters: Record<string, Converter> = {
  bankOfAmerica: bankOfAmericaConverter,
  // scotiabank
  // ...
};

export function getConverter(bankName: string): Converter {
  const converter = converters[bankName];
  return converter;
}
