import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";

export const orderDetails = {
  id: "US5426899",
  created: "2021-03-06T00:00:00.000Z",
  updated: "2021-03-06T00:00:00.000Z",
  items: [
    {
      id: "1",
      name: "Ultricies Nibh",
      qty: 2,
      price: 8.99,
      img: product1,
    },
    {
      id: "2",
      name: "Fringilla Sollicitudin Consectetur",
      qty: 1,
      price: 14.99,
      img: product2,
    },
  ],
  total: 32.97,
  shipping: {
    name: "Ryan Fralick",
    address: "1489 DESERT SPRINGS AVE",
    city: "RICHLAND, Washington 99352",
    country: "United States",
  },
  tags: ["SUBSCRIPTION_ORDER", "PAID", "UNFULFULLED"],
};
