import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import { useCookies } from 'react-cookie';
import supabase from './config/supabaseClient';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Success from './components/Success';
import Home from './components/Home';


function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['list_groups_with_tasks']);
  const [user, setUser] = useState<any>(null)
  const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        console.log(event)
        if (event === "SIGNED_IN" /*&& event !== 'INITIAL_SESSION'*/){
            navigate("/success");
        }
        else
        if (event !== "INITIAL_SESSION"){
            navigate("/")
        }
    })


  // call on page load
  function checkCookie() {
    const cookie_present = cookies.list_groups_with_tasks;
    if (cookie_present){
      return cookies.list_groups_with_tasks;
    }
    else {
      return "Alfred";
    }
  }

  useEffect(() => {
    //alert(checkCookie())
    setCookie('list_groups_with_tasks', checkCookie());
  }, [cookies, user]) 


  return (
    <div className="App">
        <Header  user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success user={user} setUser={setUser} />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
