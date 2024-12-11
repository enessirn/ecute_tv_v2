import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DetailProvider } from "./context/DetailContext";
import { PopularDetailProvider } from "./context/PopularDetail";
import { PopularListProvider } from "./context/PopularList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PopularListProvider>
    <PopularDetailProvider>
      <DetailProvider>
        <App />
      </DetailProvider>
    </PopularDetailProvider>
  </PopularListProvider>
);
