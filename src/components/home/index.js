import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import PuffLoader from "react-spinners/PuffLoader";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./index.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw console.error(response);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const searchUser = (event) => {
    setSearch(event.target.value);
  };

  const changeSort = (event) => {
    setOrder(event.target.value);
  };

  const filterUser = users.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedUser = filterUser.sort((a, b) => {
    if (order === 'asc') {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    }
    else {
      if (a.name < b.name) {
        return 1;
      }
      return -1;
    }
  })

  const listItem = () => (
    <div>
      <ul className="userCardContainer">
        {sortedUser.map((Items) => (
          <li
            className="UserCard"
            key={Items.id}
            onClick={() => navigate(`/user/${Items.id}`)}
          >
            <div className="UserDetil">
              <h1>
                {Items.name}
              </h1>
              <p>{Items.email}</p>
              <p>{Items.address.city}</p>
            </div>
            <img
              src="https://res.cloudinary.com/dzipdro4d/image/upload/v1737264005/bbf75727-8bd2-47ae-bcfe-cec0b1ec26a7.png"
              alt="User"
              className="UserImage"
            />
          </li>
        ))}
      </ul>
    </div>
  );

  const Loader = () => (
    <div>
      <div className="Loader">
        <PuffLoader />
      </div>
    </div>
  );

  return (
    <>
      <div className="navbar">
        <h1>User Connect</h1>

        <div className="searchContainer">
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={order}
                label="Sort"
                onChange={changeSort}
                size="small"
                className="sorter"
              >
                <MenuItem value={"asc"}>A-Z</MenuItem>
                <MenuItem value={"dsc"}>Z-A</MenuItem>
              </Select>
            </FormControl>
          </div>
          {<FaSearch className="searchIcon" />}
          <TextField
            onChange={searchUser}
            id="filled-size-small"
            className="box"
            label="Search"
            type="search"
            size="small"
            variant="standard"
            
          />
        </div>
      </div>
      {loading ? Loader() : listItem()}
    </>
  );
};

export default Home;
