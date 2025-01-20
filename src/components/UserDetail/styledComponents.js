import styled from "styled-components";

export const UserDeatilbg = styled.div`
  background-color: ${(props) => (props.themeColor ? "#eeeeee" : "#000000")};
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size:12px;
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
  background-color: ${(props) => (props.themeColor ? "white" : "#141517")};
  color: ${(props) => (props.themeColor ? "black" : "white")};
  border-radius: 4px;
  overflow: scroll;
  width: 80%;
  height: 90%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media (max-width: 768px) {
    width:350px;
  }
`;

export const UserDeatilHead = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;