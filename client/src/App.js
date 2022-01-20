import myApi from './api/Api';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
   const [data, setData] = useState([]);
  // const [isAddUser, setIsAddUser] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    getReq()
  }, [isClicked]);
  //console.log(process.env.NODE_ENV);

  const getReq = async () => {
    const { data } = await myApi.get('/users');
    setData(data.users);
  };

  const print = () => {
    console.log(data)
    return (
      <ul>
        {data.map((user, index) => {
          return (
            <li key={index}>
              <p className={user.id}>id: {user.id}</p>
              <p className="balance">credit: {user.cash}</p>
              <p className="credit">cash: {user.credit}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    );
    
  }
  return (
    <div >
      {' '}
      Bank Application!
      <button onClick={() => setIsClicked(true)}>get</button>
      {isClicked && print()}
    </div>
  );
}

export default App;