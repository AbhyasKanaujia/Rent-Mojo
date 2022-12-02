import { Filter, ProductCard } from "../../components";
import "./homepage.css";
import { rentItems } from "../../db";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const HomePage = ({ rentIt }) => {
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
    console.log(arr.length);
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
        {rentIt.map((it, index) => (
          <ProductCard {...it} key={index} />
        ))}
      </div>
    </main>
  );
};

export { HomePage };
