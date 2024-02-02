import Image from "next/image";

import { IoSearchOutline, IoCartOutline, IoMenuOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="navbar px-20 py-5 bg-transparent w-full fixed z-40">
      <div className="navbar-start">
        <Image
          src="/logo-no-background.svg"
          width={132}
          height={132}
          alt="logo"
        />
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-3 align-top">
          <div>
            <IoSearchOutline className="text-white text-xl cursor-pointer" />
          </div>
          <div>
            <IoCartOutline className="text-white text-xl cursor-pointer" />
          </div>
          <div>
            <IoMenuOutline className="text-white text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
