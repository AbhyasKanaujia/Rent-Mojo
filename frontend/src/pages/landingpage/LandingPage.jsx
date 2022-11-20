import "./landing-page.css";
import { Link } from "react-router-dom";
import { rentRooms, rentItems } from "../../db";
import plus from "../../plus.png";

const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img className="card-imagee" src={image} />
      <p className="card-header">{title}</p>
    </div>
  );
};
const Carousel = ({ title, arr }) => {
  console.log(arr);
  return (
    <div className="carousel">
      <p className="carousel-header">{title}</p>
      <div className="carousel-flex">
        {arr?.map((item, index) => (
          <Card key={index} {...item} />
        ))}
        <Link
          className="show-more"
          to={title === "Hostels" ? "rent" : "purchase"}
        >
          <div className="show-more">
            {/* <button className="btn btn-primary-solid">Show more</button> */}
            <img className="show-more-img" src={plus} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};
const LandingPage = () => {
  return (
    <main className="landing-main">
      <Carousel title={"Hostels"} arr={rentRooms} />
      <Carousel title={"Buy Items"} arr={rentItems} />
      {/* <Carousel /> */}
      {console.log(rentRooms)}
    </main>
  );
};
export { LandingPage };
