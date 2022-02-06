import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../store/SearchContext';



function Header() {
  const { user } = useContext(AuthContext)
  const {setSearchTerm} =useContext(SearchContext)
  const navigate = useNavigate();
  console.log(user);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>navigate('/')}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}` : <span onClick={() => navigate('/login')}>Login</span>}</span>
          
        </div>
        <div className='logoutPage'>
          {user && <span onClick={() => {
            const auth = getAuth();
            signOut(auth).then(() => {
              navigate('/login');
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
          }}>Logout</span>}

        </div>


        <div className="sellMenu" onClick={()=>navigate('/sell')}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
