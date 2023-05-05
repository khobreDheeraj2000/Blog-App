import { myAxios } from "./helper";

export const signUp =(user)=>{
    return myAxios.post('/register',user).then((response)=>{console.log(response);
        console.log(user);
        return response.data;
    });
}