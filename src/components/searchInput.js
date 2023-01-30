import { useNavigate } from "react-router-dom";
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

import React from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className='header__center'>
      <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <SearchIcon onClick={handleSearch}/>
    </div>
  );
};

export default SearchInput;

// function SearchInput({ onInput }) {
//   const [value, setValue] = React.useState("");

//   function handleChange(event) {
//     setValue(event.target.value);
//   }

//   return (
//     <div className="search-input">
//       <input type="text" value={value} onChange={handleChange} />
//       <button onClick={() => onInput(value)}>Submit</button>
//     </div>
//   );
// }

// export default SearchInput;