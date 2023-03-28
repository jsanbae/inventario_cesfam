import {RiArrowDropDownFill} from "react-icons/ri";

import MainSearchComponent from "./MainSearchComponent";

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 lg:pl-12 w-full shadow-lg ">
      <MainSearchComponent />

      <nav className="w-full md:w-[70%] flex justify-center md:justify-end">
        <ul className="flex items-center font-semibold">
            <li>
                <a href="#" className="flex items-center gap-1 text-gray-500">
                  Ana Yop G. 
                  <RiArrowDropDownFill className="text-2xl"/>
                </a>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;