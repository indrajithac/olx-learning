import React, { useEffect, useState, useContext } from 'react';
import { firestore } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore";
import Heart from '../../assets/Heart';
import './Post.css';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom'


function Posts() {
  const [products, setProducts] = useState([])
  const { postDetails, setPostDetails } = useContext(PostContext)
 
  const navigate = useNavigate();




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

  useEffect(()=>{
    //console.log(postDetails);
  },[postDetails])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map(product => {
            return <div
              className="card"
              onClick={() => {
                setPostDetails(product)
                navigate('/view')
              }
              }
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
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
          })}

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">

          {products.map((product) => {
            return <div
              className="card"
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
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
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
