import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TransactionsWidget from "./components/TransactionsWidget";
import InvoiceWidget from "./components/InvoiceWidget";
import FinancialStatusWidget from "./components/FinancialStatusWidget";
import bankAccountDetails from "./services/bankAccDetails.json";
import { getData } from './services/localData'

function App() {


  
  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(bankAccountDetails));
  // }, [])
  

  //const [loc, setLoc] = useState(localStorage.getItem('data'));

  // useEffect(() => {
  //   const initialData = localStorage.getItem("data");
  //   if (initialData) {
  //     setInitialDataState(JSON.parse(initialDataState));
  //   }
  // }, [initialDataState]);

  // useEffect( () => {
  //  async function setInitialData() {
  //   localStorage.setItem("data", JSON.stringify(bankAccountDetails));
  //  }
  //  setInitialData()
  // }, []);

  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(bankAccountDetails));
  } 
  const localStorageData = getData("data");
  const { invoices, transactionDetails, thresholdAmount } = localStorageData;
  

  return (
    <div className="App">
      <Header />
      <TransactionsWidget transactionDetails={transactionDetails}/>
      <InvoiceWidget localStorageData={localStorageData} invoices={invoices} />
      <FinancialStatusWidget thresholdAmount={thresholdAmount} invoices={invoices} transactionDetails={transactionDetails}  />
    </div>
  );
}

export default App;
