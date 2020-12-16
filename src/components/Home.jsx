import React from "react";

const products = [
  {
    title: "mens tshirt",
    price: 200,
    imgUrl:
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "womens tshirt",
    price: 220,
    imgUrl:
      "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "shoes",
    price: 800,
    imgUrl:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  { title: "tops", price: 100, imgUrl: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  { title: "bottoms", price: 120, imgUrl: 'https://images.pexels.com/photos/1261373/pexels-photo-1261373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  { title: "socks", price: 150, imgUrl: 'https://images.pexels.com/photos/251454/pexels-photo-251454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  { title: "belts", price: 220, imgUrl: 'https://images.pexels.com/photos/1023937/pexels-photo-1023937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  { title: "caps", price: 100, imgUrl: 'https://images.pexels.com/photos/2084702/pexels-photo-2084702.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
];

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-4 my-5">
            <img className="img-fluid" src={product.imgUrl} alt="" />
            <h5>{product.title}</h5>
            <span>{product.price}</span> <br/>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
