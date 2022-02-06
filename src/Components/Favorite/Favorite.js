import React from 'react';
import './Favorite.css'
import Heart from '../../assets/Heart';

function Favorite() {
    return (
        <div className="postParentDiv">
            
            <div className="favorites">
                <div className="heading">
                    <span>Favorites</span>
                </div>
                <div className="cards">

                    <div
                        className="card"
                    >
                        <div className="favorite">
                            <Heart></Heart>
                        </div>
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                        <div className="content">
                            <p className="rate">&#x20B9; 654654</p>
                            <span className="kilometer">category</span>
                            <p className="name"> name</p>
                        </div>
                        <div className="date">
                            <span>date</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Favorite;
