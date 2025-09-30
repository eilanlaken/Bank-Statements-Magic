import { Converter } from "./types";

export const bankOfAmericaConverter: Converter = {
  name: "Bank of America",
  convert: async () => {
    return [
      "date,amount,description",
      "2025-09-01,-50.00,Coffee Shop",
      "2025-09-02,1200.00,Salary Deposit",
    ].join("\n");
  },
};
