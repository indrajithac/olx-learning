import React, { useContext, useEffect, useState }  from 'react';
import { firestore } from '../../firebase/config';

import './Favorite.css'

import Card from '../Posts/Card';
import Heart from '../../assets/HeartOff';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { AuthContext } from '../../store/Context'
import { PostContext } from '../../store/PostContext';



function Favorite() {
    const { user } = useContext(AuthContext)
    const { postDetails, setPostDetails } = useContext(PostContext)

    const [products, setProducts] = useState([])
    const [currentUser, setCurrentUser] = useState([])

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

      useEffect(() => {
        currentUser.map(async (data) => {
            console.log(data);
            const querySnapshot = await getDocs(collection(firestore, 'users', data.id, 'favorites'));
            console.log(querySnapshot);
            const allPost = querySnapshot.docs.map((product) => {
              return {
                ...product.data(),
                id: product.id
              }
            })
            console.log(allPost);
            setProducts(allPost)
      
        }) 
      },[currentUser])

      const removeFavorites = (product) => {
        // const newFavoriteList = [product]
        // setFavorites(newFavoriteList)
        // console.log(newFavoriteList);
      }
    

    return (
        <div className="postParentDiv">

            <div className="favorites">
                <div className="heading">
                    <span>Favorites</span>
                </div>
                <div className="cards">
                <Card products={products} handleFavoritesClick={removeFavorites} setPostDetails={setPostDetails} favoriteComponent={Heart} />
                </div>
            </div>
        </div>
    )
}

export default Favorite;
