import styled from "styled-components";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { FaSearch } from "react-icons/fa";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 15vh;
  background-color: #ffcc00;
  padding: 20px;
  @media (max-width: 768px) {
    height: 10vh;
    font-size: 10px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 10px;
  }
`;

export const ThemeButton = styled.button`
  background-color: Transparent;
  border: none;
  cursor: pointer;
`;

export const LoaderDiv = styled.div`
  margin-top: 80px;
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
`;

export const UserCardContainers = styled.div`
  background-color: ${(props) => (props.themecolor ? "white" : "#232429")};
`;

export const UserCardContainer = styled.ul`
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
`;

export const UserCard = styled.li`
  display: flex;
  justify-content: space-around;
  width: 400px;
  border: 2px solid;
  border-radius: 8px;
  min-height: 190px;
  max-height: 200px;
  font-size: 10px;
  text-decoration: none;
  background-color: ${(props) => (props.themecolor ? "white" : "#2B2B35")};
  border-color: ${(props) => (props.themecolor ? "white" : "#2B2B35")};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 768px) {
    width: 330px;
  }
`;

export const UserDetil = styled.div`
  color: ${(props) => (props.themecolor ? "black" : "white")};
  width: 220px;
  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const UserImage = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
`;

export const Sorter = styled(Select)`
  height: 20px;
`;

export const FaSearchIcon = styled(FaSearch)`
  width: 40px;
  height: 25px;
  @media (max-width: 768px) {
    width: 40px;
    height: 15px;
  }
`;

export const TextFieldInput = styled(TextField)`
  margin: 0;
  padding: 0px;
  width: 300px;
  align-self: center;
  @media(max-width:768px){
  width:80px;
  height:20px;
  bottom:30px;
  }
`;
