import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes } from "react-router-dom";
import customTheme from "./themes";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Hero />
      <Routes></Routes>
    </ChakraProvider>
  );
};

export default App;
