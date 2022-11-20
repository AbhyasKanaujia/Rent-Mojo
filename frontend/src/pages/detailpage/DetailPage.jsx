import { useLocation } from "react-router-dom";
import "./detail-page.css";

const DetailPage = () => {
  const location = useLocation();
  const { image, title, price, includeStock, _id, originalPrice, rating } =
    location.state;
  //   console.log(from);
  return (
    <div className="detail-div">
      <div className="image-div">
        <img src={image} className="detail-img" />
        <button
        // onClick={() => removeFromWishList(_id)}
        // disabled={favoriteLoading}
        >
          <i
            style={{ color: "red", fontSize: "x-large" }}
            className="card-btn-icon fas fa-heart"
            // disab
          ></i>
        </button>
      </div>
      <div className="detail-text-div">
        <p className="detail-title">{title}</p>
        <p className="detail-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          reiciendis eveniet, provident rem minus qui, veniam, doloremque
          officia laborum quis in? Quisquam commodi ullam deserunt inventore
          eaque tempora perspiciatis vel?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          reiciendis eveniet, provident rem minus qui, veniam, doloremque
          officia laborum quis in? Quisquam commodi ullam deserunt inventore
          eaque tempora perspiciatis vel?
        </p>
        <button
            className="card-btn card-btn-primary"
            // onClick={addToCart}
            // disabled={cartLoading}
          >
            Contact Seller
          </button>
      </div>
    </div>
  );
};

export { DetailPage };
