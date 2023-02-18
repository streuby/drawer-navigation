import React from "react";
import NavScreen from "./screens/NavScreen";
import TitleBar from "./components/TitleBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TitleBar title="Simple React Navigation Components" />
      <NavScreen />
      <Footer />
    </div>
  );
}

export default App;
