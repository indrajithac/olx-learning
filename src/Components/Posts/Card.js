import React from "react";
import { useNavigate } from 'react-router-dom'



const Card = (props,index) => {
    const navigate = useNavigate();
    const FavoriteComponent=props.favoriteComponent

    return (
        <>
            {props.products.map(product => {
                return <div
                    className="card" 
                >
                    <span className="favorite" onClick={() => props.handleFavoritesClick(product)}>
                        <FavoriteComponent/>
                    </span>
                    <div onClick={() => {
                        props.setPostDetails(product)
                        navigate('/view')
                    }
                    }
                    >
                        <div className="image">
                            <img src={product.url} alt="" />
                        </div>
                        <div className="content">
                            <p className="rate">&#x20B9; {product.price}</p>
                            <span className="kilometer">{product.category}</span>
                            <p className="name"> {product.name}</p>
                        </div>
                        <div className="date">
                            <span>{product.createdAt}</span>
                        </div>
                    </div>

                </div>
            })}

        </>
    )
}

export default Card