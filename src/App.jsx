import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import customTheme from "./themes";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LandingPage from "./pages/LandingPage";
import BankTransferLayout from "./components/BankTransferLayout";
import CreditTransferLayout from "./components/CreditTransferLayout";
import CashTransferLayout from "./components/CashTransferLayout";
import ModalLayout from "./components/ModalLayout";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Routes>
        <Route path="/:transactionId" element={<LandingPage />} />
        {
          <Route
            path="/:transactionId/bank/:bankName"
            element={<BankTransferLayout />}
          />
        }
        <Route
          path="/:transactionId/card/:cardName"
          element={<CreditTransferLayout />}
        />
        <Route
          path="/:transactionId/cash/:cashName"
          element={<CashTransferLayout />}
        />
        <Route path="/modal" element={<ModalLayout />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
