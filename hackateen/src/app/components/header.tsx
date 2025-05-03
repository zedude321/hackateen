// import { useState } from "react";
// import { SearchInput } from ".";
import { FiBell, FiInbox, FiSearch } from "react-icons/fi";

export const Header = () => {
  return (
    <div className="fixed right-0 top-0 px-10 flex items-center justify-between h-22 min-h-22 border-b border-white-1/60 w-4/5">
      <div className={`bg-dark-2 rounded-md flex items-center gap-3 w-input`}>
        <label htmlFor="search-input">
          <FiSearch className="h-5 w-5 text-white-1/60 my-2.5 ml-5" />
        </label>
        <input
          id="search-input"
          placeholder=""
          className="w-full py-2.5 pr-5 bg-transparent outline-none text-white-1 font-inter text-14 placeholder:text-white-1/60"
        />
      </div>
      <div className="flex gap-5 items-center">
        <p className="text-white-1/60 font-inter text-16">ASd</p>
      </div>
    </div>
  );
};
