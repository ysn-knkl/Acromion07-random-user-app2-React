import React, { useState } from "react";
import cw from "../assets/cw.svg";
import design from "../assets/design.svg";
import growingUpMan from "../assets/growing-up-man.svg";
import growingUpWoman from "../assets/growing-up-woman.svg";
import mail from "../assets/mail.svg";
import man from "../assets/man.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import phone from "../assets/phone.svg";
import woman from "../assets/woman.svg";

import "./Card.css";

const Card = ({ user, randomUser }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userSpec, setUserSpec] = useState(
    <>
    <h6>My Name is</h6>
    <h5>{user.name.first+ " " + user.name.last}</h5>
    </>   
  );




  function addUserInfo() {
    return setUserInfo((prevInfo) =>[prevInfo,
        <tbody>
        <tr>
          <td>{user.name.first+ " " + user.name.last}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.dob.age}</td>
        </tr>
      </tbody> ]
       
    );
  }

  function changeSpec(topic,value){
      return setUserSpec(
        <>
        <h6>My {topic} is</h6>
        <h5>{value}</h5>
        </> 
      )
  }


  return (
    <div className="card-container">
      <div className="main-img">
        <img src={cw} alt="cw" />
      </div>

      <div className="card-info">
        {userSpec}
      </div>

      <div className="card-icon">
        {/* <img src={cw} alt="cw" /> */}
        <img src={woman} alt="woman" onMouseOver={() => changeSpec("Name",user.name.first + " " + user.name.last)}/>
        {/* <img src={man} alt="man" /> */}
        <img src={mail} alt="mail" onMouseOver={() => changeSpec("Email",user.email)}/>
        {/* <img src={growingUpMan} alt="growingUpMan" /> */}
        <img src={growingUpWoman} alt="growingUpWoman" onMouseOver={() => changeSpec("Age",user.dob.age)} />
        {/* <img src={design} alt="design" /> */}
        <img src={map} alt="map"  onMouseOver={() => changeSpec("Street",user.location.street.name + " " + user.location.street.number)}/>
        <img src={phone} alt="phone" onMouseOver={() => changeSpec("Phone",user.phone)} />
        <img src={padlock} alt="padlock" onMouseOver={() => changeSpec("Password",user.login.password)} />
      </div>
      <div className="btn">
        <button type="button" onClick={randomUser}>
          new user
        </button>
        <button type="button" onClick={addUserInfo}>
          add user
        </button>
      </div>

      <table className="user-form">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
          </tr>
        </thead>

        {userInfo}
        
      </table>
    </div>
  );
};
export default Card;
