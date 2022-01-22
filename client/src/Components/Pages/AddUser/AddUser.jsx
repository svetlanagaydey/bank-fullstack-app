import React from 'react';
import Header from '../../Header/Header';
import './addUser.css';
import { useState } from "react";
//import validator from 'validator';
import myApi from '../../../api/Api';


const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cash, setCash] = useState("");
  const [credit, setCredit] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const setNewUser = async () => {
   // if (isValidInput()) {
      try {
        console.log(firstName)
        await myApi.post('/users', {
          firstName,
          lastName,
          cash,
          credit
        });
        setIsAdded(true)
      } catch (err) {
        console.log(err.message);
      }
  }

  const printForm = () => {
    return (
      <div >
      <h2 className="add-header">Add new client</h2>
      <form className="form">
          <div className="form-field">
            <label>First Name</label>
            <input type="text" name="first-name" value={firstName}
              onChange={(e) => {setFirstName(e.target.value)}}
            />
          </div>
          <div className="form-field">
            <label>Last Name</label>
            <input type="text" name="last-name" value={lastName}
              onChange={(e) => {setLastName(e.target.value)}}
            />
          </div>
          <div className="form-field">
            <label>Cash</label>
            <input type="text" name="cash" value={cash}
              onChange={(e) => {
                if (!isNaN(e.target.value)) {
                  setCash(e.target.value)
                }
              }}
            />
          </div>
          <div className="form-field">
            <label>Credit</label>
            <input type="text" name="credit" value={credit}
              onChange={(e) => {
                if (!isNaN(e.target.value)) {
                  setCredit(e.target.value)
                }
              }}
            />
          </div>
          <button className="addButton" type="button" onClick={setNewUser}>Add new client</button>
        </form>
        </div>
    )
  }

  const printMassage = () => {
    return (
      <div className="successMesage">
        <p>Client have been added successfully</p>
      </div>
    )
  } 

  return (
    <div className="container">
      <Header />
      {isAdded? printMassage() : printForm()}
    </div>
  );
}

export default AddUser;