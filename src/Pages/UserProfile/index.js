import React from "react";
import Image from "react-bootstrap/Image";
import "./styles.css";
const UserProfilePage = () => {
  return (
    <div className="mainContainer">
      {/* Heading images */}
      <div className="mainInnerContainer">
        <Image
          src={
            (URL =
              "https://cdn.dribbble.com/users/463835/avatars/normal/72f4215070d9ead440150a2b3fe0e963.png?1588298636")
          }
        />
        <p>Hoodzpah</p>
        <p>Brand Identity and Type Design for oohs and aaahs</p>
      </div>
      <Image
        src={
          (URL =
            "https://cdn.dribbble.com/users/463835/profile/masthead_image/lone-pine-slider.jpg/100px250")
        }
        style={{ width: "50%", maxWidth: 480 }}
      />
      {/* Nav bar */}
      {/* Games Cards/ Members card/ about page  */}
    </div>
  );
};

export default UserProfilePage;
