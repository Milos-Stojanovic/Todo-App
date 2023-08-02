import { useNavigate } from "react-router";
import supabase from "../config/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from "react";
import { useGetUserData } from "../repositories/userRepository";

function Dashboard({setUser}) {
    
    const navigate = useNavigate();
    const user = useGetUserData();
  
    useEffect(() => {
      setUser(user);
    }, [user])
    
    return (
      <div className="App">
        <div className="App-header">
            Welcome
        </div>
      </div>  
    );
}

export default Dashboard;