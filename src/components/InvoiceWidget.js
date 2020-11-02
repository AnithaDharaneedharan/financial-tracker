import React, { useState } from "react";
import InvoiceWidgetRow from "../components/InvoiceWidgetRow";
import { setData } from "../services/localData";
import { Table, Button } from "react-bootstrap";

export default function InvoiceWidget({ localStorageData, invoices }) {
  const [invoiceState, setInvoice] = useState(invoices);

  const addNewInvoice = (newInvoice) => {
    setInvoice([...invoiceState, newInvoice]);
  };

  const updateInvoice = (invoiceObj) => {
    const data = invoiceState;
    let alreadyInWidget = false;
    data.forEach((invoice) => {
      if (invoice.referenceNumber === invoiceObj.referenceNumber) {
        alreadyInWidget = true;
      }
    });

    if (!alreadyInWidget) {
        const localInvoice = [...localStorageData.invoices];
        localInvoice.push(invoiceObj);
        setData("data", {
          ...localStorageData,
          invoices: localInvoice,
        });
        setInvoice([...invoiceState, invoiceObj]);
        return;
    }

    const existingInvoices = [...invoiceState];
    const updatedIndex = existingInvoices.findIndex(
      (existingInvoice) =>
        existingInvoice.referenceNumber === invoiceObj.referenceNumber
    );
    if (updatedIndex < 0) return;
    existingInvoices[updatedIndex] = invoiceObj;
    setData("data", { ...localStorageData, ...{ invoices: existingInvoices } });
    setInvoice(existingInvoices);
  };

  const removeInvoice = (invoiceObj) => {
    const data = invoiceState;
    const newData = data.filter(
      (invoice) => invoice.referenceNumber !== invoiceObj.referenceNumber
    );
    setData("data", { ...localStorageData, ...{ invoices: newData } });
    setInvoice(newData);
  };

  return (
    <div className="heading">
      Add or Modify Invoice Details
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Invoice Reference Number</th>
            <th>Customer Name</th>
            <th>Creation Date</th>
            <th>Amount</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoiceState.map((invoice, index) => (
            <InvoiceWidgetRow
              key={index}
              invoice={invoice}
              onSaveEvent={updateInvoice}
              onRemove={removeInvoice}
              transactionDetails={localStorageData.transactionDetails}
            />
          ))}
        </tbody>
      </Table>
      <Button data-testid="add-new-invoice" onClick={() => addNewInvoice({referenceNumber: 'new'})}>
        Add New Invoice
      </Button>
    </div>
  );
}
