import React from "react";
import { calculateBankBalance } from "../utils/calculateBankBalance";
import { amountFlowFormatter } from "../utils/amountFlowFormatter";

export default function FinancialStatusWidget( { thresholdAmount, invoices, transactionDetails  } ) {
  // const { thresholdAmount, invoices, transactionDetails  } = getData("data"); 
  let status = "";
  const calculatedbankBalance = calculateBankBalance();
  if (calculatedbankBalance > 0 && calculatedbankBalance > thresholdAmount)
    status = "green";
  else if (calculatedbankBalance > 0) status = "yellow";
  else if (calculatedbankBalance <= 0) status = "red";

  return (
    <div className="heading">
      <div className="status">
        <strong>
          Your account balance is{" "}
          <span className={status}>
            {amountFlowFormatter(calculatedbankBalance)}
          </span>
        </strong>{" "}
      </div>

      <div>
        Total number of transactions in last 30 days is{" "}
        <strong>{transactionDetails.length}</strong>
      </div>
      <div>
        You created <strong>{invoices.length}</strong> invoices in the last 30
        days{" "}
      </div>
    </div>
  );
}
