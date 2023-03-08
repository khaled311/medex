/* eslint-disable @next/next/no-img-element */
import { Cart, Heart, Search, User } from "@/assets/icons";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="p-7 bg-primary">
      <div className="container">
        <div className="flex items-center">
          {/* Logo */}
          <div className="">
            <img src="/assets/logo.svg" alt="site logo" />
          </div>
          {/* Logo */}

          {/* Search */}
          <form className="relative w-full h-[50px] max-w-[450px] rounded overflow-hidden mx-auto">
            <input
              type="text"
              className="w-full border h-full text-base px-3 focus:outline-none"
            />
            <button className="bg-[#22b0f0] absolute top-0 right-0 z-10 h-full px-2 transition hover:bg-primary">
              <Search className="" />
            </button>
          </form>
          {/* Search */}

          {/* Left Side */}
          <div className="flex">
            {/* UserOptions */}
            <div className="flex items-center gap-12">
              <div className="flex justify-center flex-col items-center cursor-pointer">
                <User />
                <span className="text-sm">User</span>
              </div>
              <div className="flex justify-center flex-col items-center cursor-pointer">
                <Heart />
                <span className="text-sm">User</span>
              </div>
              <div className="flex justify-center flex-col items-center cursor-pointer">
                <Cart />
                <span className="text-sm">User</span>
              </div>
            </div>
            {/* UserOptions */}
          </div>
          {/* Left Side */}
        </div>
      </div>
    </div>
  );
};

export default Header;
