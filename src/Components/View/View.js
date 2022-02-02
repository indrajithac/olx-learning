import React, { useEffect, useContext, useState } from 'react';
import { PostContext } from '../../store/PostContext';
import { firestore } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";


import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState()
  const { postDetails } = useContext(PostContext)
  //console.log(postDetails);




  useEffect(() => {
    async function fetchData() {
      const { userId } = postDetails
      //console.log(userId);

      const q = query(collection(firestore, "users"), where("id", "==", userId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserDetails(doc.data())
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }
    console.log(userDetails);
    fetchData();
  })

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails &&
          < div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        }
      </div>
    </div >
  );
}
export default View;
