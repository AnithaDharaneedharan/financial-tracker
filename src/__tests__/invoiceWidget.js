import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import InvoiceWidget from '../components/InvoiceWidget';
import mockbankAccDetails from '../services/bankAccDetails.json';

test('should render snapshot', () => {
  const { queryByTestId, asFragment } = render(
    <InvoiceWidget
      localStorageData={mockbankAccDetails}
      invoices={mockbankAccDetails.invoices}
    />
  );
  expect(queryByTestId('add-new-invoice')).toBeTruthy();
  expect(asFragment()).toMatchSnapshot();
});

test('should check if Add New Invoice button is present ', () => {
  const { queryByTestId } = render(
    <InvoiceWidget
      localStorageData={mockbankAccDetails}
      invoices={mockbankAccDetails.invoices}
    />
  );
  expect(queryByTestId('add-new-invoice')).toBeTruthy();
});
