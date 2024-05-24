import Navbar from "./frontend_components/component_Navigation/Navbar.jsx";
import myImage from "./assets/images/bg_stallventory.jpg";
import { useState } from "react";

function Home() {
  const [product, setProduct] = useState({
    product1: "Sisig w/ Rice",
    price1: "Php 60.00",
    product2: "Adobo w/ Rice",
    price2: "Php 60.00",
    product3: "Siomai w/ Rice",
    price3: "Php 45.00",
    product4: "Garlic Chicken w/ Rice",
    price4: "Php 60.00",
    product5: "Butter Chicken w/ Rice",
    price5: "Php 60.00",
    product6: "Pork Steak w/ Rice",
    price6: "Php 70.00",
    product7: "Mismo Softdrinks",
    price7: "Php 25.00",
    product8: "Swakto Softdrinks",
    price8: "Php 15.00",
  });

  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleButtonClick = (productName, price) => {
    const priceValue = parseFloat(price.replace("Php ", ""));
    setSelectedItems([
      ...selectedItems,
      { product: productName, price: price },
    ]);
    setTotalPrice(totalPrice + priceValue);
  };

  return (
    <div className=" relative">
      <div
        className="h-svh w-auto bg-cover bg-center md:grid-cols-4 lg:grid-cols-6 mt-14 "
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <div className=" absoluteinset-0 z-10">
          <Navbar className="fixed left-0 right-0 top-0 z-10" />
        </div>

        <div className=" flex justify-center items-center md:px-10 ">
          <div className="bg-gray-500 backdrop-brightness-50 bg-white/5 h-98 rounded-2xl mt-16 md:mt-24 lg:mt-16 py-4 md:py-8 lg:py-10 px-3 md:px-5 lg:px-8 ">
            <h1 className="flex justify-center items-center bg-orange-200 h-12 md:h-16 lg:h-20 font-sans font-bold text-center text-4xl rounded-md mb-10">
              Selling Products
            </h1>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-7 justify-items-center">
              <button
                className="bg-gray-300 h-28 md:h-32 lg:h-48 w-28 md:w-32 lg:w-48 rounded-2xl text-center text-base md:text-lg lg:text-2xl font-bold p-2 md:p-3 lg:p-4"
                onClick={() =>
                  handleButtonClick(product.product1, product.price1)
                }
              >
                Sisig w/ Rice
              </button>
              <button
                className="bg-gray-300 h-28 md:h-32 lg:h-48 w-28 md:w-32 lg:w-48 rounded-2xl text-center text-base md:text-lg lg:text-2xl font-bold p-2 md:p-3 lg:p-4"
                onClick={() =>
                  handleButtonClick(product.product2, product.price2)
                }
              >
                Adobo w/ Rice
              </button>
              <button
                className="bg-gray-300 h-28 md:h-32 lg:h-48 w-28 md:w-32 lg:w-48 rounded-2xl text-center text-base md:text-lg lg:text-2xl font-bold p-2 md:p-3 lg:p-4"
                onClick={() =>
                  handleButtonClick(product.product3, product.price3)
                }
              >
                Siomai w/ Rice
              </button>
              <button
                className="bg-gray-300 h-28 md:h-32 lg:h-48 w-28 md:w-32 lg:w-48 rounded-2xl text-center text-base md:text-lg lg:text-2xl font-bold p-2 md:p-3 lg:p-4"
                onClick={() =>
                  handleButtonClick(product.product4, product.price4)
                }
              >
                Garlic Chicken w/ Rice
              </button>
              <button
                className="bg-gray-300 h-28 md:h-32 lg:h-48 w-28 md:w-32 lg:w-48 rounded-2xl text-center text-base md:text-lg lg:text-2xl font-bold p-2 md:p-3 lg:p-4"
                onClick={() =>
                  handleButtonClick(product.product5, product.price5)
                }
              >
                Butter Chicken w/ Rice
              </button>
              <button
                className="bg-gray-300 h-28 md:h-32 lg:h-48 w-28 md:w-32 lg:w-48 rounded-2xl text-center text-base md:text-lg lg:text-2xl font-bold p-2 md:p-3 lg:p-4"
                onClick={() =>
                  handleButtonClick(product.product6, product.price6)
                }
              >
                Pork Steak
              </button>
              <button
                className="bg-gray-300 h-28 md:h-32 lg:h-48 w-28 md:w-32 lg:w-48 rounded-2xl text-center text-base md:text-lg lg:text-2xl font-bold p-2 md:p-3 lg:p-4"
                onClick={() =>
                  handleButtonClick(product.product7, product.price7)
                }
              >
                Mismo Softdrinks
              </button>
              <button
                className="bg-gray-300 h-28 md:h-32 lg:h-48 w-28 md:w-32 lg:w-48 rounded-2xl text-center text-base md:text-lg lg:text-2xl font-bold p-2 md:p-3 lg:p-4"
                onClick={() =>
                  handleButtonClick(product.product8, product.price8)
                }
              >
                Swakto Softdrinks
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-200 h-screen w-auto">
        <div className="flex justify-center items-center mb-2 md:mb-10 pt-8 md:pt-20 ">
          <h1 className=" bg-orange-600 h-16 md:h-20 w-48 md:w-96 flex items-center justify-center text-4xl font-bold rounded-2xl font-sans">
            Sales
          </h1>
        </div>
        <div className=" flex justify-center pb-5 ">
          <p className=" mt-4 font-bold text-2xl">
            Total Sales: Php {totalPrice.toFixed(2)}{" "}
          </p>
        </div>
        <div className=" pb-10  flex justify-center">
          <div className="bg-amber-600 h-96 w-auto md:w-1/2 rounded-lg p-4 overflow-y-scroll">
            <table className="w-full py-10">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center text-2xl">Product</th>
                  <th className="px-4 py-2 text-center text-2xl">Price</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {selectedItems.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-xl">{item.product}</td>
                    <td className="border px-4 py-2 text-lg">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
