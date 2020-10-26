import { getData, setData } from "../services/localData";


export const calculateBankBalance = () => {
  const data = getData("data");
  let { bankBalance } = data;
  const { transactionDetails } = data;
  bankBalance = transactionDetails.reduce(
    (total, transactionDetail) => total + transactionDetail.amount,
    0
  );
  setData("data", {...data, bankBalance});
  return bankBalance;
};
