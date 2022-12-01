import { Filter, ProductCard } from "../../components";
import "./homepage.css";
import { rentItems } from "../../db";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const db = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIIPoQR7-NSx8dAQ5DM1V9BUKIUjdP9zo97tHQR1yeTDM2F5M3CxahKj4ovCxNlmv47E&usqp=CAU",
    title: "Single Bed",
    price: "3300",
    includeStock: true,
    _id: "23",
    originalPrice: "4000",
    rating: 4,
  },
  {
    image:
      "data:image/jpeg;base64,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",
    title: "Cycle",
    price: "2100",
    includeStock: true,
    _id: "24",
    originalPrice: "3000",
    rating: 5,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThE7lDnlOERMcRKnLziXsk-kNRiKsn5US0-WHv5dOCCDx1QKZ3MwovSPt0TJdncahOEiw&usqp=CAU",
    title: "Single Bed",
    price: "2300",
    includeStock: true,
    _id: "23",
    originalPrice: "3000",
    rating: 4,
  },
];

const HomePage = () => {
  const [state, setState] = useState({
    furniture: true,
    book: false,
    utensil: false,
    vehicle: false,
  });
  const [arr, setArr] = useState(rentItems);

  useEffect(() => {
    setArr([]);
    if (state.furniture) {
      setArr((prev) => [
        ...prev,
        ...rentItems.filter((it) => it.category === "furniture"),
      ]);
    }
    if (state.book) {
      setArr((prev) => [
        ...prev,
        ...rentItems.filter((it) => it.category === "book"),
      ]);
    }
    if (state.utensil) {
      setArr((prev) => [
        ...prev,
        ...rentItems.filter((it) => it.category === "utensil"),
      ]);
    }
    if (state.vehicle) {
      setArr((prev) => [
        ...prev,
        ...rentItems.filter((it) => it.category === "vehicle"),
      ]);
    }
    console.log(arr.length)
  }, [state]);

  return (
    <main className="main-grid">
      <div className="main-filter">
        <aside className="filter">
          <p className="filter-label">Filters</p>

          <p className="filter-label">Category</p>
          <ul className="category-list">
            <li className="category-list-item">
              <input
                id="furniture"
                type="checkbox"
                name="category"
                checked={state.furniture}
                onChange={() => {
                  setState((prev) => ({ ...prev, furniture: !prev.furniture }));
                }}
              />
              <label htmlFor="furniture"> Furniture</label>
              <br />
            </li>
            <li className="category-list-item">
              <input
                id="book"
                type="checkbox"
                name="category"
                checked={state.book}
                onChange={() => {
                  setState((prev) => ({ ...prev, book: !prev.book }));
                }}
              />
              <label htmlFor="book"> Books</label>
              <br />
            </li>
            <li className="category-list-item">
              <input
                id="utensil"
                type="checkbox"
                name="category"
                checked={state.utensil}
                onChange={() => {
                  setState((prev) => ({ ...prev, utensil: !prev.utensil }));
                }}
              />
              <label htmlFor="utensil"> Utensils</label>
              <br />
            </li>
            <li className="category-list-item">
              <input
                id="vehicle"
                type="checkbox"
                name="category"
                checked={state.vehicle}
                onChange={() => {
                  setState((prev) => ({ ...prev, vehicle: !prev.vehicle }));
                }}
              />
              <label htmlFor="vehicle"> Vehicle</label>
              <br />
            </li>
          </ul>
          <p className="filter-label">Rating</p>
          <ul className="category-list">
            <li className="category-list-item">
              <input
                type="radio"
                id="4star"
                name="rating"
                value="4"
                // checked={state.rating === 4}
                // onChange={() => dispatch({ type: "SET_RATING", payload: 4 })}
              />
              <label htmlFor="4star">{" 4 Stars & above"}</label>
            </li>
            <li className="category-list-item">
              <input
                type="radio"
                id="3star"
                name="rating"
                value="3"
                // checked={state.rating === 3}
                // onChange={() => dispatch({ type: "SET_RATING", payload: 3 })}
              />
              <label htmlFor="3star">{" 3 Stars & above"}</label>
            </li>
            <li className="category-list-item">
              <input
                type="radio"
                id="2star"
                name="rating"
                value="2"
                // checked={state.rating === 2}
                // onChange={() => dispatch({ type: "SET_RATING", payload: 2 })}
              />
              <label htmlFor="2star">{" 2 Stars & above"}</label>
            </li>
            <li className="category-list-item">
              <input
                type="radio"
                id="1star"
                name="rating"
                value="1"
                // checked={state.rating === 1}
                // onChange={() => dispatch({ type: "SET_RATING", payload: 1 })}
              />
              <label htmlFor="1star">{" 1 Stars & above"}</label>
            </li>
          </ul>
          <p className="filter-label">Sort by</p>
          <ul className="category-list">
            <li className="category-list-item">
              <input
                type="radio"
                id="low"
                name="sort"
                // checked={state.sortBy === "LOW_TO_HIGH"}
                // onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
              />
              <label htmlFor="low">{" Price - Low to High"}</label>
            </li>
            <li className="category-list-item">
              <input
                type="radio"
                id="high"
                name="sort"
                // checked={state.sortBy === "HIGH_TO_LOW"}
                // onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
              />
              <label htmlFor="high">{" Price - High to Low"}</label>
            </li>
          </ul>
        </aside>
      </div>
      <div className="main-area">
        {arr.map((it) => (
          <ProductCard {...it} />
        ))}
      </div>
    </main>
  );
};

export { HomePage };
