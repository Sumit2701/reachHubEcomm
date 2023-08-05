import search from "./Assets/search.svg";
import account from "./Assets/account.svg";
import cart from "./Assets/cart.svg";
import down from "./Assets/down.svg";
import logo from "./Assets/logo.jpg";
import Image from "next/image";
function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center mx-20 my-5 font-sans 	">
        <div className="flex items-center   font-bold">
          <div className=" text-lg ">
            <Image src={logo} className="w-40" alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center font-semibold text-lg ">
          <div className="relative group px-20 ">
            <div className="flex justify-center items-center">
              <a href="Categories" className=" hover:text-gray-300 px-2">
                Categories
              </a>{" "}
              <Image src={down} width={"8px"} alt="down" />
            </div>
            <div className="dropdown-content hidden absolute bg-gray-300 shadow z-10 min-w-40 group-hover:block">
              <a href="Mobiles" className="block py-2 px-4  hover:bg-gray-200">
                Mobiles
              </a>
              <a
                href="Earphoneds"
                className="block py-2 px-4  hover:bg-gray-200"
              >
                Earphones
              </a>
            </div>
          </div>
          <a href="Deals" className=" hover:text-gray-300 pr-20">
            Deals
          </a>
          <a href="Whast" className=" hover:text-gray-300 pr-20">
            What is New
          </a>

          <a href="Deliverry" className=" hover:text-gray-300 pr-10">
            Deliverry
          </a>
        </div>
        <div className="flex items-center space-x-12 text-lg   ">
          <form className="flex items-center  rounded-full border overflow-hidden ">
            <input
              type="text"
              placeholder="Search Products"
              className="rounded-l-full py-2 px-4 bg-gray-100 text-gray-600  focus:outline-none focus:bg-white focus:ring-2 "
            />
            <button
              type="submit"
              className="bg-gray-100 text-white p-2 rounded-r-full"
            >
              <Image src={search} alt="search" />
            </button>
          </form>

          <a href="account" className="flex items-center hover:text-gray-700">
            <Image src={account} alt="" className="mr-2" />
            Account
          </a>
          <a
            href="cart"
            className="flex items-center pr-15 hover:text-gray-700"
          >
            <Image className="mr-2" src={cart} alt="cart" />
            Cart
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
