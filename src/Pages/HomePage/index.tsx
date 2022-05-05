import React from "react";
import Background from "./Components/Background";
import Paper from "./Components/Paper";
import SearchBar from "./Components/SearchBar";

const HomePage: React.FC<any> = () => {
  return (
    <>
      <Background />
      <Paper />
      <SearchBar />
    </>
  );
};

export default HomePage;
