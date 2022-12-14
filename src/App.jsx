import React from "react";
import "./App.css";

//components
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CatProvider from "./context/CatContext";

// import Auth0ProviderWithHistory from "./Auth0/Auth0ProviderWithHistory";

const App = () => (
  <CatProvider>
    <div>
      <Header />
      <Footer />
    </div>
  </CatProvider>
);

export default App;
