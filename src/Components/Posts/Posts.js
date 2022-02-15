import React, { useEffect, useState, useContext } from 'react';
import { firestore } from '../../firebase/config';
import { collection, getDocs, setDoc, doc, query, where, addDoc } from "firebase/firestore";
import Heart from '../../assets/HeartOff';
import './Post.css';
import { PostContext } from '../../store/PostContext';
import { AuthContext } from '../../store/Context'

import Card from './Card';


function Posts() {
  const { user } = useContext(AuthContext)
  const [products, setProducts] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const { postDetails, setPostDetails } = useContext(PostContext)
  const [favorites, setFavorites] = useState([])



  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(firestore, "products"));
      const allPost = querySnapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      console.log(allPost);
      setProducts(allPost)

    }
    fetchData();
  }, [])

  useEffect(() => {
    //console.log(postDetails);
  }, [postDetails])

  useEffect(() => {
    const getUserData = async () => {
      const q = query(collection(firestore, "users"), where("id", "==", user && user.uid));
      const querySnapshot = await getDocs(q);
      const queryData = querySnapshot.docs.map((details) => ({
        ...details.data(),
        id: details.id

      }));
      console.log(queryData)
      setCurrentUser(queryData)
    }
    getUserData()
  }, [user])


  const addFavorites = (product) => {
    const newFavoriteList = [product]
    setFavorites(newFavoriteList)
    console.log(newFavoriteList);
  }

  useEffect(() => {
    //console.log(...currentUser);
    console.log(favorites);
    currentUser.map(async (data) => {
      favorites.map(async(fav) => {
        //console.log(fav.name);
        console.log(data.id );

        console.log(fav);
        

        const docRef =await addDoc(collection(firestore, 'users', data.id, 'favorites'), {          
          name: fav.name,
          category: fav.category,
          price: fav.price,
          url: fav.url,
          userId: fav.userId,
          createdAt: fav.createdAt,
          id: fav.id
        })
        console.log("Document written with ID: ", docRef.id);



       })



    })
  }, [favorites])


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <Card products={products} handleFavoritesClick={addFavorites} setPostDetails={setPostDetails} favoriteComponent={Heart} />
        </div>
      </div>

      <div className="recommendations">
        <div className="heading">
          <span>Favorites</span>
        </div>
        <div className="cards">
          <Card products={favorites} setPostDetails={setPostDetails} handleFavoritesClick={addFavorites} favoriteComponent={Heart} />
        </div>
      </div>
    </div>
  );
}

export default Posts;
