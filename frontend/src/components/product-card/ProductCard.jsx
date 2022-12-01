import "./product-card.css";
// import { useUser } from "../../context/user-context";
// import { useCart } from "../../context/cart-context";
// import { useToast } from "../../context/toast-context";
// import { useWishlist } from "../../context/wishlist-context";
// import { useUser, useCart, useToast, useWishlist } from "../../context";
// import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
const cartList = [];
const wishlistList = [];

const getDiscount = (price, originalPrice) => {
  return Math.round(((price - originalPrice) / originalPrice) * 100);
};

const ProductCard = ({
  image,
  title,
  price,
  includeStock,
  _id,
  originalPrice,
  rating,
}) => {
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [num,setNum] = useState("Contact Seller");
  //   const { encodedToken } = useUser();
  //   const { showToast } = useToast();
  //   const { wishlistList, setWishlistList } = useWishlist();
  let navigate = useNavigate();

  //   const {
  //     state: { cartList },
  //     dispatch,
  //   } = useCart();

  const addToCart = async () => {
    try {
      setCartLoading(true);
      //   const cartData = await axios.post(
      //     "/api/user/cart",
      //     {
      //       product: { _id },
      //     },
      //     {
      //       headers: {
      //         authorization: encodedToken,
      //       },
      //     }
      //   );
      //   dispatch({ type: "SET_CART", payload: cartData.data.cart });
    } catch (error) {
      //   showToast({ message: "Sign in to add items to cart", type: "failure" });
    } finally {
      setCartLoading(false);
    }
  };

  const addToWishList = async () => {
    try {
      setFavoriteLoading(true);
      //   const wishlistData = await axios.post(
      //     "/api/user/wishlist",
      //     {
      //       product: { _id },
      //     },
      //     {
      //       headers: {
      //         authorization: encodedToken,
      //       },
      //     }
      //   );
      //   setWishlistList(wishlistData.data.wishlist);
    } catch (error) {
      //   showToast({ message: "Sign in to add items wishlist", type: "failure" });
    } finally {
      setFavoriteLoading(false);
    }
  };

  const removeFromWishList = async () => {
    try {
      setFavoriteLoading(true);
      //   const wishlistData = await axios.delete(`/api/user/wishlist/${_id}`, {
      //     headers: {
      //       authorization: encodedToken,
      //     },
      //   });
      //   setWishlistList(wishlistData.data.wishlist);
    } catch (error) {
      //   showToast({
      //     message: "Unable to remove items from wishlist",
      //     type: "failure",
      //   });
    } finally {
      setFavoriteLoading(false);
    }
  };

  const goToCart = () => {
    navigate("/cart");
  };
  let ratingStar = [];
  for (let i = 1; i <= rating; i++)
    ratingStar.push(
      <i className="rating-icon checked fas fa-star" key={i}></i>
    );
  return (
    <div
      className="card-container product-card-container"
      style={includeStock ? { opacity: 1 } : { opacity: 0.2 }}
    >
      <Link
        to={`/detail/${_id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        state={{
          image,
          title,
          price,
          includeStock,
          _id,
          originalPrice,
          rating,
        }}
        // state={{ from: "occupation" }}
      >
        <img
          className="card-image product-card-img"
          src={image}
          alt="Item Image"
        />
        <h6 className="card-title">{title}</h6>
      </Link>
      <div className="card-price-container">
        <p className="card-description card-price">₹ {price}</p>
        <p className="card-description card-price-striked">₹ {originalPrice}</p>
      </div>
      <div className="card-btn-container">
        {cartList.some((item) => item._id === _id) ? (
          <button className="card-btn card-btn-primary" onClick={goToCart}>
            Go to Cart
          </button>
        ) : (
          <button
            className="card-btn card-btn-primary"
            onClick={() => {setNum("98543 65486")}}
            disabled={cartLoading}
          >
            {num}
          </button>
        )}
        {/* <button className="card-btn card-btn-secondary">Save For Later</button> */}

        <div className="ratingContainer">
          {"Rating  "}
          {ratingStar}
        </div>
        {wishlistList.some((item) => item._id === _id) ? (
          <button
            onClick={() => removeFromWishList(_id)}
            disabled={favoriteLoading}
          >
            <i
              style={{ color: "red", fontSize: "x-large" }}
              className="card-btn-icon fas fa-heart"
              disab
            ></i>
          </button>
        ) : (
          <button onClick={() => addToWishList(_id)} disabled={favoriteLoading}>
            <i
              style={{ fontSize: "x-large" }}
              className="card-btn-icon far fa-heart"
            ></i>
          </button>
        )}
      </div>
      <div className="card-badge">{getDiscount(price, originalPrice)}%</div>
    </div>
  );
};

export { ProductCard };
