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
  background-color: rgb(247, 225, 58);
  padding: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
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
  border: 2px solid rgb(169, 20, 228);
  border-radius: 8px;
  min-height: 190px;
  max-height: 200px;
  font-size: 10px;
  text-decoration: none;
  color: black;
`;

export const UserDetil = styled.div`
  width: 220px;
`;

export const UserImage = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
  border-radius: 10px;
`;

export const Sorter = styled(Select)`
  height: 20px;
`;

export const FaSearchIcon = styled(FaSearch)`
  width: 40px;
  height: 25px;
`;

export const TextFieldInput = styled(TextField)`
  margin: 0;
  padding: 0px;
  width: 300px;
  align-self: center;
`;
