import React, { useState, useEffect } from "react";
import cw from "../assets/cw.svg";
import growingUpWoman from "../assets/growing-up-woman.svg";
import mail from "../assets/mail.svg";
import man from "../assets/man.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import phone from "../assets/phone.svg";
import woman from "../assets/woman.svg";
import {FaUserTimes} from 'react-icons/fa'

import "./Card.css";

const Card = ({ user, randomUser}) => {
  const [userInfo, setUserInfo] = useState([]);
  const [userSpec, setUserSpec] = useState(null);
  const [tableShow, setTableShow] = useState(false);
  

  useEffect(() => {
    setUserSpec(
      <>
        <p>My Name is</p>
        <h3>{user.name.first + " " + user.name.last}</h3>
      </>
    );
  }, [user]);

  function changeSpec(topic, value) {
    return setUserSpec(
      <>
        <p>My {topic} is</p>
        <h3>{value}</h3>
      </>
    );
  }

  function addUserInfo() {
    return (
      setUserInfo((prevInfo) => [...prevInfo,
          <tr key={Math.random()}>
            <td>{user.name.first + " " + user.name.last}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.dob.age}</td>
            <td><button onClick={DeleteUser} type="button"><FaUserTimes /></button></td>
          </tr>
      ]));   
  }

  const DeleteUser = (e) => {
    e.currentTarget.parentElement.parentElement.remove();
  }


  return (
    <>
      <img id="image" src={cw} alt="i" />
      <div className="card-container">
        <div className="main-img">
          <img src={user.picture.large} alt="image" />
        </div>
        <div className="card-info">{userSpec}</div>
        <div className="card-icon">
          {(user.gender == 'male') ?
            <img
              src={man}
              alt="woman"
              onMouseOver={() =>
                changeSpec("Name", user.name.first + " " + user.name.last)
              }
            />
         :
          (
          <img
            src={woman}
            alt="woman"
            onMouseOver={() =>
              changeSpec("Name", user.name.first + " " + user.name.last)
            }
          />
          )
          }
          <img
            src={mail}
            alt="mail"
            onMouseOver={() => changeSpec("Email", user.email)}
          />
          <img
            src={growingUpWoman}
            alt="growingUpWoman"
            onMouseOver={() => changeSpec("Age", user.dob.age)}
          />
          <img
            src={map}
            alt="map"
            onMouseOver={() =>
              changeSpec(
                "Street",
                user.location.street.name + " " + user.location.street.number
              )
            }
          />
          <img
            src={phone}
            alt="phone"
            onMouseOver={() => changeSpec("Phone", user.phone)}
          />
          <img
            src={padlock}
            alt="padlock"
            onMouseOver={() => changeSpec("Password", user.login.password)}
          />
        </div>
        <div className="btn">
          <button type="button" onClick={randomUser}>
            NEW USER
          </button>
          <button
            type="button"
            onClick={() => {
              addUserInfo();
              setTableShow(true);
            }}
          >
            ADD USER
          </button>
        </div>
        {tableShow ? (
          <table className="user-form">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userInfo}
            </tbody> 
          </table>
        ) : "Nothing to Show"}
      </div>
    </>
  );
};
export default Card;
