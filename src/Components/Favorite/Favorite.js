import React  from 'react';
import './Favorite.css'
import Card from '../Posts/Card';


function Favorite() {
    

    return (
        <div className="postParentDiv">

            <div className="favorites">
                <div className="heading">
                    <span>Favorites</span>
                </div>
                <div className="cards">
                {/* <Card products={favorites} setPostDetails={setPostDetails}/> */}
                </div>
            </div>
        </div>
    )
}

export default Favorite;
