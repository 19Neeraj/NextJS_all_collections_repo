import { httpAxios } from "@/helper/httpHelper";

export async function signup(user){
    const result  = await httpAxios.post("/api/users",user).then((response)=>response.data);
    return result;
 }

export async function login(loginData){
    const result = await httpAxios.post("/api/login",loginData).then((response)=>response.data);
    return result;
}

export async function currentUser(){
    const result = await httpAxios.get("/api/currentuser").then((response)=>response.data);
    return result;
}

export async function userlogedout(){
    const result = await httpAxios.post("/api/logout").then((response)=>response.data);
    return result;
}
export async function getsingleuser(userid){
    const result = await httpAxios.get(`/api/users/${userid}`).then((response)=>response.data);
    return result;
}

