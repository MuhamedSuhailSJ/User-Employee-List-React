import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../context/themeContext";
import PuffLoader from "react-spinners/PuffLoader";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import {
  Navbar,
  SearchContainer,
  LoaderDiv,UserCardContainers,
  UserCardContainer,
  UserCard,
  UserDetil,
  UserImage,
  Sorter,
  FaSearchIcon,
  TextFieldInput,
  ThemeButton,
} from "./styledComponents";

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
    return order === "asc"
      ? a.name > b.name
        ? 1
        : -1
      : a.name < b.name
      ? 1
      : -1;
  });

  const listItem = (theme) => (
    <UserCardContainers themeColor={theme}>
      <UserCardContainer>
        {sortedUser.map((Items) => (
          <UserCard
            themeColor={theme}
            key={Items.id}
            onClick={() => navigate(`/user/${Items.id}`)}
          >
            <UserDetil themeColor={theme}>
              <h1>{Items.name}</h1>
              <p>{Items.email}</p>
              <p>{Items.address.city}</p>
            </UserDetil>
            <UserImage
              src="https://res.cloudinary.com/dzipdro4d/image/upload/v1737264005/bbf75727-8bd2-47ae-bcfe-cec0b1ec26a7.png"
              alt="User"
              className="UserImage"
            />
          </UserCard>
        ))}
      </UserCardContainer>
    </UserCardContainers>
  );

  const Loader = () => (
    <div>
      <LoaderDiv>
        <PuffLoader />
      </LoaderDiv>
    </div>
  );
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { theme, changeTheme } = value;
        console.log(theme);
        const OnChangeTheme = () => {
          changeTheme();
        };
        return (
          <>
            <Navbar>
              <h1>User Connect</h1>
              <SearchContainer>
                <ThemeButton onClick={OnChangeTheme}>
                  {theme ? <MdLightMode /> : <MdDarkMode />}
                </ThemeButton>
                <div>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Sorter
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
                    </Sorter>
                  </FormControl>
                </div>
                {<FaSearchIcon />}
                <TextFieldInput
                  onChange={searchUser}
                  id="filled-size-small"
                  label="Search"
                  type="search"
                  size="small"
                  variant="standard"
                />
              </SearchContainer>
            </Navbar>
            {loading ? Loader() : listItem(theme)}
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Home;
