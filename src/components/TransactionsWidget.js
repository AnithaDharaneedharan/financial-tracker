import React from "react";
import { Table } from "react-bootstrap";
import TransactionWidgetRow from "./TransactionWidgetRow.js";

export default function TransactionsWidget({ transactionDetails }) {
  return (
    <div className="heading">
      Transaction Details
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Date of Transaction</th>
            <th>Transaction Description</th>
            <th>Transaction Reference number</th>
            <th>Amount</th>
          </tr>
          {transactionDetails.map((transactionDetail, index) => (
            <TransactionWidgetRow
              key={index}
              transactionDetail={transactionDetail}
            />
          ))}
        </thead>
      </Table>
    </div>
  );
}
