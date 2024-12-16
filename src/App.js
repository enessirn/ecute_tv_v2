import React, {useContext, useEffect, useState } from "react";
import TrendItems from "./pages/TrendItems";
import Detail from "./components/Details/Detail";
import DetailContext from "./context/DetailContext";
import List from "./pages/List";
import Categories from "./pages/Categories";
function App() {
  const { close } = useContext(DetailContext);
  const [scrollValue,setScrollValue] = useState();
  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    }

    window.addEventListener("scroll",handleScroll);
    
  },[])
  // useEffect(() => {
  //   console.log(scrollValue)
  // },[scrollValue])
  
  

  // useEffect(() => {
  //   console.log(close,"close değeri")
  //   if (close === true) {
  //     setTimeout(() => {
  //       window.scrollTo(0,scrollValue);
  //     }, 500);

  //   }
  // },[close])

  return (
    <div className="main font-poppins scroll-smooth">
      <TrendItems />
      {close ? <List /> : null}
      {close ? null : <Detail />}
      {close ? <Categories /> : null}
    </div>
  );
}
export default React.memo(App);
