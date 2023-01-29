import { useNavigate } from "react-router-dom";
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';


const SearchInput = ({ history }) => {
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
