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

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:transactionId" element={<LandingPage />} />
        <Route path="/bankTransfer" element={<BankTransferLayout />} />
        <Route path="/creditTransfer" element={<CreditTransferLayout />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
