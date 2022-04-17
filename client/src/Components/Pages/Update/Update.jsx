import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import myApi from '../../../api/Api'
import Header from '../../Header/Header';
import './update.css';


const Update = () => {
  
  const [updatedClient, setUpdatedCliet] = useState({});
  const [isUpd, setIsUpd] = useState(false)

  const location = useLocation();
  const { client } = location.state;

  useEffect(() => {
    console.log(updatedClient);
    console.log(isUpd)
  }, [updatedClient, isUpd]);

  const update = async(event) => {
    event.preventDefault();
    try {  
      await myApi.put(`/users/update/${client._id}`, {
        passport: updatedClient.passport,
        firstName: updatedClient.firstName,
        lastName: updatedClient.lastName,
        credit: updatedClient.credit

      });
      console.log("updated from client");
      setIsUpd(true);
    } catch (err) {
      console.log(err.message);
    }
  }

  const onHandlerChange = (e) => {
    const key = e.target.name
    const value = e.target.value;
    setUpdatedCliet({...updatedClient, [key]:value})
  }

  const printResponseMessage = () => {
    return (
      <div>
        <h2>Updated successfully</h2>
      </div>
    )
  } 

  return (
    <div className="container">
        <Header />
        {isUpd ? printResponseMessage() : (
          <div> <h2 className="">Update Client: </h2> </div>
        )}
        <form className="form" onSubmit={update}>

          <div className="form-field">
            <label>Passport</label>
            <input type="text" name="passport"
              defaultValue={client.passport}
              disabled={isUpd}
              onChange={onHandlerChange}
            />
          </div>

          <div className="form-field">
          <label>First Name</label>
          <input type="text" name="first-name"
            defaultValue={client.firstName}
            disabled={isUpd}
            onChange={onHandlerChange}
          />
        </div>

        <div className="form-field">
          <label>Last Name</label>
          <input type="text" name="last-name" 
            defaultValue={client.lastName}
            disabled={isUpd}
            onChange={onHandlerChange}
          />
        </div>

        <div className="form-field">
          <label>Credit</label>
          <input type="text" name="credit"
            defaultValue={client.credit}
            disabled={isUpd}
            onChange={onHandlerChange}
          />
        </div>

        <button className="addButton" disabled={isUpd} type="submit">Update</button>
        </form>
    </div>
  )
}

export default Update;