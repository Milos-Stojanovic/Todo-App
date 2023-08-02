import supabase from "../config/supabaseClient"

export async function getUserData() {
    await supabase.auth.getUser().then(value => {
        if(value.data?.user){
            console.log(value.data.user)
            return value.data.user;
        }
    })
}