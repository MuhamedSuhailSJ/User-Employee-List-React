import styled from "styled-components";
import { IoArrowBackSharp } from "react-icons/io5";

export const UserDeatilbg = styled.div`
  background-color: ${(props) => (props.themecolor ? "#eeeeee" : "#000000")};
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Userimg = styled.img`
  width: 150px;
  height: 150px;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const UserDetailCard = styled.div`
  background-color: ${(props) => (props.themecolor ? "white" : "#141517")};
  color: ${(props) => (props.themecolor ? "black" : "white")};
  border-radius: 4px;
  overflow-y: scroll;
  width: 80%;
  height: 90vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media (max-width: 768px) {
    width: 95%;
    height: 80vh;
  }
`;

export const UserDeatilHead = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const BackButton = styled.button`
  background-color: ${(props) => (props.themecolor ? "transparent" : "#141517")};
  border: none;
`;

export const IoArrowBackSharpIcon = styled(IoArrowBackSharp)`
  color: ${(props) => (props.themecolor ? "black" : "white")};
  height: 20px;
  width: 30px;
`;