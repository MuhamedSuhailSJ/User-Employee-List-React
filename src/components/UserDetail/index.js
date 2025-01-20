import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../context/themeContext";
import PuffLoader from "react-spinners/PuffLoader";
import { useParams } from "react-router-dom";

import {
  UserDeatilbg,
  Userimg,
  UserDetailCard,
  UserDeatilHead,
  IoArrowBackSharpIcon,
  BackButton,
} from "./styledComponents";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setuserData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new console.error(response.message);
        }
        return response.json();
      })
      .then((data) => {
        setuserData(data);
        setLoading(false);
      });
  }, [id]);

  const { zipcode, city, suite, street } =
    userData === "" ? "" : userData.address;
  const { lat, lng } = userData === "" ? "" : userData.address.geo;
  const { name, catchPhrase, bs } = userData === "" ? "" : userData.company;

  const Loader = () => (
    <div>
      <div className="Loader">
        <PuffLoader />
      </div>
    </div>
  );

  const userDetailContainer = (theme) => (
    <UserDetailCard themecolor={theme}>
      <BackButton themecolor={theme} onClick={() => navigate("/")}>
        <IoArrowBackSharpIcon themecolor={theme} />
      </BackButton>
      <UserDeatilHead>
        <Userimg
          src="https://res.cloudinary.com/dzipdro4d/image/upload/v1737264005/bbf75727-8bd2-47ae-bcfe-cec0b1ec26a7.png"
          alt="User"
        />
        <div>
          <h1>{userData.name}</h1>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      </UserDeatilHead>
      <div>
        <p>Address:</p>
        <div>
          <p>street: {street}</p>
          <p>suite: {suite}</p>
          <p>city: {city}</p>
          <p>zipcode: {zipcode}</p>
          <p>
            lat:{lat} lng:{lng}
          </p>
        </div>
        <p>Phone: {userData.phone}</p>
        <p>Website: {userData.website}</p>
        <br />
        <p>Company:</p>
        <div>
          <p>name: {name}</p>
          <p>catchPhrase: {catchPhrase}</p>
          <p>bs: {bs}</p>
        </div>
      </div>
    </UserDetailCard>
  );

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { theme } = value;
        return (
          <UserDeatilbg themecolor={theme}>
            {loading ? Loader() : userDetailContainer(theme)}
          </UserDeatilbg>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default UserDetail;
