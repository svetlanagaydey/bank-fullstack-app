import React from 'react';
import Header from '../../Header/Header';
import './addUser.css';
import { useState, useEffect } from "react";
//import validator from 'validator';
import myApi from '../../../api/Api';
import axios from 'axios';
import e from 'cors';


const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passport, setPassport] = useState("");
  const [birthDay, setBirthDay] = useState({day: "", month: "", year:""});
  const [cash, setCash] = useState("");
  const [credit, setCredit] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    
  },[isAdded]);

  const setNewClient = async (e) => {
    const birthdayString = `${birthDay.day}/${birthDay.month}/${birthDay.year}`
    e.preventDefault();
      try {
        await myApi.post('/users', {
          passport: passport,
          firstName: firstName,
          lastName: lastName,
          birthDay: birthdayString,
          cash: cash,
          credit: credit,
        });
        setIsAdded(true)
      } catch (err) {
        console.log(err.message);
      }
  }

  const onDateChange = (e) => {
    const input = e.target.value;
    setBirthDay({
      ...birthDay,
      [e.target.name]: input
    })
  }

  const printForm = () => {
    return (
      <div >
      <h2 className="add-header">Add new client</h2>
      <form className="form" onSubmit={setNewClient}>

        <div className="form-field">
          <label>Passport</label>
          <input type="number" name="passport" value={passport}
            onChange={(e) => {setPassport(e.target.value)}}
          />
        </div>

        <div className="form-field">
          <label>First Name</label>
          <input type="text" name="first-name" value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>Last Name</label>
          <input type="text" name="last-name" value={lastName}
            onChange={(e) => {setLastName(e.target.value)}}
          />
        </div>

        <div className="form-field">
          <label>Date of birth: </label>
          <div className="date-inputs">
            <input type="text" pattern="[0-9]*" maxLength="2" size="2" className="date-field" name="day" placeholder='dd' onChange={onDateChange}/> / 
            <input type="text" pattern="[0-9]*" maxLength="2" className="date-field" name="month" placeholder='mm' onChange={onDateChange}/> / 
            <input type="text" pattern="[0-9]*" maxLength="4" className="date-field date-field--year" name="year" placeholder='yyyy' onChange={onDateChange} />
          </div>
        </div>
    
          <div className="form-field">
            <label>Cash</label>
            <input type="number" name="cash" value={cash}
              onChange={(e) => {setCash(e.target.value)}}
            />
          </div>
          
          <div className="form-field">
            <label>Credit</label>
            <input type="text" name="credit" value={credit}
              onChange={(e) => { setCredit(e.target.value)}}
            />
          </div>
          <button className="addButton" type="submit">Add new client</button>
        </form>
        </div>
    )
  }

  const printMassage = () => {
    return (
      <div className="successMesage">
        <p>New Client have been added successfully</p>
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