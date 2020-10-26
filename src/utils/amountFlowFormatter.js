import React from "react";

export const amountFlowFormatter = (amount) => {
  const splitter = amount.toFixed(2).toString().split(".");
  const [prefixAmount, suffixAmount] = splitter;
  const amountSign = Math.sign(amount) !== -1 ? '+' : '-' ;
  const amountColor = Math.sign(amount) !== -1 ? "credit" : "debit" ;
  return (
    <span className={amountColor}>
      <span className="amount-prefix">{amountSign}£{Math.abs(prefixAmount)}.</span>
      <span className="amount-suffix">{suffixAmount}</span>
    </span>
  );
};
