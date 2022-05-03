import React, {useState, useEffect} from 'react';
import Header from '../../Header/Header';
import myApi from '../../../api/Api'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../../Spinner/Spinner'

import './usersPage.css';

const UsersPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const APPEND_LENGTH = 3;
	
useEffect(() => {
	const getReq = async () => {
    const { data } = await myApi.get(`/users/users/${APPEND_LENGTH}`);
    setData(data.users);
  };
  getReq();
}, []);

useEffect(() => {
  console.log(hasMore)
},[hasMore])

const fetchMoreData = async () => {
	try {
    setTimeout(async() => {
		const append = await myApi.get(`/users/users/${APPEND_LENGTH}/${currentPage}`);
		console.log(append.data.users.length);
    if (append.data.users.length < APPEND_LENGTH ) {
      setHasMore(false);
      return
    } 
		setData([...data, ...append.data.users]);
    setCurrentPage(currentPage + 1);
    }, 500);
	} catch (e) {
		console.log(e.message);
	}	
};
  return (
    <div className="container">
      <Header />
      <h2 className="users-header">List of all Clients</h2>

      <div>
        <InfiniteScroll
          dataLength={data.length-1}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}> <b>Yay! You have seen it all</b></p>}
        >
          {data.map((user, index) => {
            return (
              <div className="client" key={index}>
                <span className="client-icon"></span>
                <div className="info-block">
                  <p className="passport"><span className="formSubtitles">Passport: </span>{user.passport}</p>
                  <p className="birthDay"><span className="formSubtitles">Birthday: </span>{user.birthDay}</p>
                  <p className="firstName"><span className="formSubtitles">First Name: </span>{user.firstName}</p>
                  <p className="lastName"><span className="formSubtitles">Last Name: </span>{user.lastName}</p>
                  <p className="credit"><span className="formSubtitles">credit: </span>{user.credit}</p>
                  <p className="cash"><span className="formSubtitles">cash: </span>{user.cash}</p>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default UsersPage;