import "./rent-page.css";
import { ProductCard } from "../../components";
import { useEffect } from "react";
import axios from "axios";

const url = "https://hostel-mate-backend.onrender.com/api/product";
const token = localStorage.getItem("token");
const RentPage = ({rentIt}) => {

  useEffect(()=>{
    console.log(rentIt);
  },[rentIt]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url, {
          auth:{Bearer:token}
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <main className="rent-main">
      {rentIt.map((it,index) => (
        <ProductCard key={index} {...it} />
      ))}
    </main>
  );
};

export { RentPage };
