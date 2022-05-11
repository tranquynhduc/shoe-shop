import { useEffect } from "react";
import AllProducts from "../components/AllProducts";
import NewProduct from "../components/NewProducts";
import Policy from "../components/Policy";
import Slider from "../components/Slider";

function Home() {

  return (
    <>
      <Slider />
      <Policy />
      <AllProducts />
      <NewProduct />
    </>
  );
}

export default Home;
