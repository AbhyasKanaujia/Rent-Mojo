import { useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const FormPage = ({ setRentIt, setProdIt }) => {
  const [name, SetName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [select, setSelect] = useState("room");
  const ref = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    if (ref.current.checkValidity()) {
      if (select === "room") {
        setRentIt((prev) => [
          ...prev,
          {
            image: image,
            title: name,
            price: price,
            includeStock: true,
            _id: "27",
            originalPrice: "3000",
            rating: 4,
            category: "furniture",
          },
        ]);
      } else {
        setProdIt((prev) => [
          ...prev,
          {
            image: image,
            title: name,
            price: price,
            includeStock: true,
            _id: "27",
            originalPrice: "3000",
            rating: 4,
            category: "furniture",
          },
        ]);
      }
      toast.success("item added successfully");
    } else {
      ref.current.reportValidity();
    }
  };

  return (
    <main>
      <div className="signin-container">
        <form className="form-wrapper" ref={ref}>
          <label className="input-label" htmlFor="email">
            Product Name{" "}
          </label>
          <input
            // ref={ref}
            className="input"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />

          <label className="input-label" htmlFor="password">
            Price{" "}
          </label>
          <input
            className="input"
            type="text"
            name="price"
            id="price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label className="input-label" htmlFor="password">
            Image{" "}
          </label>
          <input
            className="input"
            type="text"
            name="image"
            id="image"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <select
            style={{ margin: "1rem", padding: "0.5rem" }}
            onChange={(e) => {
              setSelect(e.target.value);
            }}
          >
            <option value="room">Room</option>
            <option value="item">Sell Item</option>
          </select>

          <input
            className="btn btn-primary-solid btn-login"
            type="submit"
            value="Add Item"
            onClick={(event) => {
              addItem(event);
            }}
          />
        </form>
      </div>
    </main>
  );
};

export { FormPage };
