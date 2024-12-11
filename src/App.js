import React from "react";
import TrendItems from "./pages/TrendItems";
import { PopularListProvider } from "./context/PopularList";
import { PopularDetailProvider } from "./context/PopularDetail";
// import Detail from './components/Details/Detail'
function App() {
  return (
    <div className="main font-poppins scroll-smooth">
      <PopularListProvider>
        <PopularDetailProvider>
          <TrendItems />
        </PopularDetailProvider>
      </PopularListProvider>
    </div>
  );
}
export default App;
