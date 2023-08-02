import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient"
import { User } from "../models/User";


export function useGetUserData() {
    const[user, setUser] = useState<User>();

    useEffect(() => {
        supabase.auth.getUser().then((response) => {
            const userData = new User(response?.data?.user?.id, response?.data?.user?.user_metadata?.name);
            setUser(userData);
        });
    }, [])
        
    return user;
  }