import React, { useEffect, useState, useContext } from 'react';
import { firestore } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore";
import Heart from '../../assets/HeartOff';
import './Post.css';
import { PostContext } from '../../store/PostContext';

import Card from './Card';
import {FavoriteContext} from '../../store/FavoriteContext'


function Posts() {
  const [products, setProducts] = useState([])
  const { postDetails, setPostDetails } = useContext(PostContext)
  const {favorites,setFavorites}=useContext(FavoriteContext)



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

  
  const addFavorites=(product)=>{
    const newFavoriteList=[...favorites,product]
    setFavorites(newFavoriteList)
    console.log(newFavoriteList);
  }

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <Card products={products} handleFavoritesClick={addFavorites} setPostDetails={setPostDetails} favoriteComponent={Heart}/>
        </div>
      </div>

      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
         <Card products={products} setPostDetails={setPostDetails} favoriteComponent={Heart}/>
        </div>
      </div>
    </div>
  );
}

export default Posts;
