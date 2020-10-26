import '@testing-library/jest-dom'
import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TransactionsWidget from '../components/TransactionsWidget';
import mockbankAccDetails from '../services/bankAccDetails.json';


test("should render snapshot", () => {
    const { asFragment } = render(<TransactionsWidget transactionDetails={mockbankAccDetails.transactionDetails}/>)
    expect(asFragment()).toMatchSnapshot()
  })