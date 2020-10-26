import "@testing-library/jest-dom";
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import InvoiceWidgetRow from "../components/InvoiceWidgetRow";
import mockbankAccDetails from "../services/bankAccDetails.json";

const mockedInvoice = {
  referenceNumber: "UBER123",
  customerName: "UBER",
  billingAddress: "SM6 1RD, LONDON",
  creationDate: "2020-08-08",
  dueDate: "2020-09-08",
  amount: -40,
  customerAccountNumber: "34476ERT5",
  customerSortCode: "9876",
};

afterEach(cleanup);

test("should render the component", () => {
  const { asFragment } = render(
    <InvoiceWidgetRow
      transactionDetails={mockbankAccDetails.transactionDetails}
      invoice={mockedInvoice}
      onSaveEvent={() => {}}
      onRemove={() => {}}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test.skip('it should render InvoiceWidgetRow reference number', () => {
    const { getByTestId } = render(<InvoiceWidgetRow invoice={mockedInvoice}/>);
    const input = getByTestId('reference-number');
    fireEvent.change(input, { target : {value: 'ANI345'}});
    expect(input.value).toBe('ANI345');
  })
  
