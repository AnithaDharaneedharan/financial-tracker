import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { dateFormatter } from "../utils/dateFormatter";
//import { getData } from "../services/localData";

export default function InvoiceWidgetRow({ invoice, onRemove, onSaveEvent, transactionDetails }) {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("NOT PAID");
  const [creationDate, setCreationDate] = useState(dateFormatter(new Date()));
  const [amount, setAmount] = useState(0);

  // const localStorageData = getData("data");
  // const { transactionDetails } = localStorageData;

  useEffect(() => {
    setReferenceNumber(invoice.referenceNumber);
    setCustomerName(invoice.customerName);
    setCreationDate(invoice.creationDate);
    setAmount(invoice.amount);
  }, [invoice]);

  useEffect(() => {
    const _paymentStatus = transactionDetails.find(
      (transactionDetail) =>
        invoice.referenceNumber === transactionDetail.referenceNumber &&
        invoice.amount === transactionDetail.amount &&
        new Date(transactionDetail.date) >= new Date(invoice.creationDate)
    )
      ? "PAID"
      : "NOT PAID";
    setPaymentStatus(_paymentStatus);
  }, [invoice, transactionDetails]);


  return (
    <tr>
      <td>
        <input
          type="text"
          value={referenceNumber || ""}
          disabled={paymentStatus === "PAID"}
          onChange={(e) => setReferenceNumber(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          value={customerName}
          disabled={paymentStatus === "PAID"}
          onChange={(e) => setCustomerName(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          value={creationDate}
          disabled={paymentStatus === "PAID"}
          onChange={(e) => setCreationDate(e.target.value)}
        ></input>
      </td>

      <td>
        <input
          type="text"
          value={amount}
          disabled={paymentStatus === "PAID"}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </td>

      <td>
        <span className={paymentStatus === "PAID" ? "paid" : "unpaid"}>
          {paymentStatus}
        </span>
      </td>
      <td>
        {paymentStatus !== "PAID" ? (
          <span className="action">
            <Button variant="secondary" onClick={() => onSaveEvent({referenceNumber,customerName, creationDate, amount, paymentStatus})}>
              Save
            </Button>
            <Button variant="secondary" onClick={() => onRemove(invoice)}>
              Remove
            </Button>
          </span>
        ) : (
          <span>N/A</span>
        )}
      </td>
    </tr>
  );
}
