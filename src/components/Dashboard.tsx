import { useNavigate } from "react-router";
import supabase from "../config/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from "react";
import { getUserData } from "../repositories/userRepository";

function Dashboard({user, setUser}) {
    
    const navigate = useNavigate();

    useEffect(() => {
        setUser(getUserData());
        console.log(user);
    }, [])

    return (
      <div className="App">
        <div className="App-header">
            Success
        </div>
      </div>  
    );
}

export default Dashboard;