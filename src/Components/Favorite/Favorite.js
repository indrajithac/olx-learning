import React, { useContext } from 'react';
import './Favorite.css'
import Card from '../Posts/Card';
import {FavoriteContext} from '../../store/FavoriteContext'
import { PostContext } from '../../store/PostContext';


function Favorite() {
    const {favorites}=useContext(FavoriteContext)
    const {setPostDetails}=useContext(PostContext)
    

    return (
        <div className="postParentDiv">

            <div className="favorites">
                <div className="heading">
                    <span>Favorites</span>
                </div>
                <div className="cards">
                <Card products={favorites} setPostDetails={setPostDetails}/>
                </div>
            </div>
        </div>
    )
}

export default Favorite;
