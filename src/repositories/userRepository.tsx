import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient"


export function useGetUserData() {
    const[user, setUser] = useState<any>();

    useEffect(() => {
        supabase.auth.getUser().then((response) => {
            const userData = response.data.user as any;
            setUser(userData);
        });
    }, [])
        
    return user;
  }