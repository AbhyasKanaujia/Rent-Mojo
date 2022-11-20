import "./filter.css";

const Filter = ({ state, dispatch }) => {
  return (
    <aside className="filter">
      <p className="filter-label">Filters</p>

      {/* <ul className="category-list">
        <li className="category-list-item">
          <input
            id="includeOutOfStock"
            type="checkbox"
            name="category"
            checked={state.includeOutOfStock}
            onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
          />
          <label htmlFor="includeOutOfStock"> Include out of stock</label>
          <br />
        </li>
      </ul> */}

      <p className="filter-label">Category</p>
      <ul className="category-list">
        <li className="category-list-item">
          <input
            id="fiction"
            type="checkbox"
            name="category"
            // checked={state.fiction}
            // onChange={() => dispatch({ type: "SELECT_FICTION" })}
          />
          <label htmlFor="fiction"> Furniture</label>
          <br />
        </li>
        <li className="category-list-item">
          <input
            id="scifi"
            type="checkbox"
            name="category"
            // checked={state.scifi}
            // onChange={() => dispatch({ type: "SELECT_SCIFI" })}
          />
          <label htmlFor="scifi"> Books</label>
          <br />
        </li>
        <li className="category-list-item">
          <input
            id="novel"
            type="checkbox"
            name="category"
            // checked={state.novel}
            // onChange={() => dispatch({ type: "SELECT_NOVEL" })}
          />
          <label htmlFor="novel"> Utensils</label>
          <br />
        </li>
        <li className="category-list-item">
          <input
            id="selfHelp"
            type="checkbox"
            name="category"
            // checked={state.selfhelp}
            // onChange={() => dispatch({ type: "SELECT_SELFHELP" })}
          />
          <label htmlFor="selfHelp"> Vehicle</label>
          <br />
        </li>
        {/* <li className="category-list-item">
          <input
            id="biography"
            type="checkbox"
            name="category"
            checked={state.biography}
            onChange={() => dispatch({ type: "SELECT_BIOGRAPHY" })}
          />
          <label htmlFor="biography"> Biography</label>
          <br />
        </li> */}
        {/* <li className="category-list-item">
          <input
            id="comic"
            type="checkbox"
            name="category"
            checked={state.comic}
            onChange={() => dispatch({ type: "SELECT_COMIC" })}
          />
          <label htmlFor="comic"> Comic</label>
          <br />
        </li> */}
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
  );
};
export { Filter };
