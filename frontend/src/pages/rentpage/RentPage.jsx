import "./rent-page.css";
import { ProductCard } from "../../components";
import { rentRooms } from "../../db";
import { useEffect } from "react";
import axios from "axios";

const db = [];

const url = "https://hostel-mate-backend.onrender.com/api/product";
const token = localStorage.getItem("token");
const RentPage = () => {
  useEffect(() => {
    console.log("hey");
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
      {rentRooms.map((it) => (
        <ProductCard {...it} />
      ))}
    </main>
  );
};

export { RentPage };
