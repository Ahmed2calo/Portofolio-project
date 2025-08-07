import React from "react";
import Layout from "./components/Layout";  // Import the Layout component
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </Layout>
  );
};

export default App;
