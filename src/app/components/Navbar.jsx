import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Navbar() {
  return (
    <>
      <div className="nav">
        <nav className="bg-white dark:bg-white w-full z-20 top-0 left-0 h-10vh">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <span
                className={`${greatVibes.className} self-center font-Cambria text-4xl font-Cambria whitespace-nowrap dark:text-Neutral-900`}
              >
                Cushy
              </span>
              <span
                className={`${greatVibes.className} self-center font-Cambria text-4xl font-Cambria whitespace-nowrap  dark:text-[#ac7c5c]`}
              >
                Co
              </span>
            </a>
            <div className="flex md:order-2 items-center">
              <a href="/" className="flex items-center relative  pr-2">
                <span className="block pb-2 text-gray-900 rounded font-normal text-2xl tracking-wider">
                  Cart
                </span>
                <FontAwesomeIcon
                  className="block text-xl text-gray-900 pl-2"
                  icon={faCartShopping}
                />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 h-5 w-5 flex items-center justify-center bg-[#ac7c5c] text-white rounded-full text-xs">
                  0
                </span>
              </a>
              <a href="/" className="flex items-center">
                <span className="block pb-2 text-gray-900 rounded font-normal text-2xl	tracking-wider pl-6">
                  Login
                </span>
                <FontAwesomeIcon
                  className="block text-xl  text-gray-900 pl-2"
                  icon={faUserPlus}
                />
              </a>
            </div>
            <div
              className="navItems items-center justify-between w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <a
                    href="#"
                    className=" block py-2 pl-3 pr-4 text-gray-900 font-normal text-base relative"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ac7c5c] rounded-full opacity-0 transition-opacity duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" block py-2 pl-3 pr-4 text-gray-900 font-normal text-base relative"
                  >
                    About
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ac7c5c] rounded-full opacity-0 transition-opacity duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" block py-2 pl-3 pr-4 text-gray-900 font-normal text-base relative"
                  >
                    Products
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ac7c5c] rounded-full opacity-0 transition-opacity duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
