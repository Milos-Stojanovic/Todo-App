import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useCookies } from 'react-cookie';


function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['list_groups_with_tasks']);

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
    alert(checkCookie())
    setCookie('list_groups_with_tasks', checkCookie());
  }, [cookies]) 


  return (
    <div className="App">
        <Header />
        <div style={{minHeight: "1000px", backgroundColor: "seagreen"}}></div>
        <Footer />
    </div>
  );
}

export default App;
