import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContext } from './store/Context'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Post from './store/PostContext';
import Search from './store/SearchContext';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost';
import Favorite from './Pages/Favorite'

function App() {
  const { setUser } = useContext(AuthContext)
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)


      } else {

      }
    });


  })
  return (
    <div>
      <Post>
        <Search>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/sell' element={<Create />} />
              <Route path='/view' element={<ViewPost />} />
              <Route path='/favorite' element={<Favorite />} />

            </Routes>
          </Router>
        </Search>
      </Post>

    </div>
  );
}

export default App;
