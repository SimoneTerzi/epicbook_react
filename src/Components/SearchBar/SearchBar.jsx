import { useState } from "react";

const Searchbar = ({ handleSearch}) => {
  const [searchData, setSearchData] = useState("");

  const inputHandler = (e) => {
    setSearchData(e.target.value);
    handleSearch(e.target.value)
  };
  console.log(searchData);
  return (
    <input
      onChange={inputHandler}
      type="text"
      name="search"
      value={searchData}
      placeholder="Search"
    ></input>
  );
};
export default Searchbar;