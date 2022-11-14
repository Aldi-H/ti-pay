import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes } from "react-router-dom";
import customTheme from "./themes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Routes></Routes>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
