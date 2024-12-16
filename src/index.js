import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DetailProvider } from "./context/DetailContext";
import { PopularDetailProvider } from "./context/PopularDetail";
import { PopularListProvider } from "./context/PopularList";
import { LocalStorageProvider } from "./context/LocalStorage";
import { CategoryProvider } from "./context/CategoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PopularListProvider>
    <PopularDetailProvider>
      <DetailProvider>
        <LocalStorageProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </LocalStorageProvider>
      </DetailProvider>
    </PopularDetailProvider>
  </PopularListProvider>
);
