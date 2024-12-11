import React, { useContext } from "react";
import TrendItems from "./pages/TrendItems";
import Detail from "./components/Details/Detail";
import DetailContext from "./context/DetailContext";

function App() {
  const {close} = useContext(DetailContext)
  return (
    <div className="main font-poppins scroll-smooth">
      <TrendItems />
      {close ? null : <Detail />}
    </div>
  );
}
export default App;
