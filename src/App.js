import React, {useContext, useEffect, useState } from "react";
import TrendItems from "./pages/TrendItems";
import Detail from "./components/Details/Detail";
import DetailContext from "./context/DetailContext";
import List from "./pages/List";
import Categories from "./pages/Categories";
import Footer from "./pages/Footer";
function App() {
  const { close } = useContext(DetailContext);
  const [scrollValue,setScrollValue] = useState();
  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    }

    window.addEventListener("scroll",handleScroll);
    
  },[])
  return (
    <div className="main font-poppins scroll-smooth bg-black">
      <TrendItems />
      {close ? <List /> : null}
      {close ? null : <Detail />}
      {close ? <Categories /> : null}
      {close ? <Footer /> : null}
    </div>
  );
}
export default React.memo(App);
