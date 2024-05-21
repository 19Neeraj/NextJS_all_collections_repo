import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task){
   const result  = await httpAxios.post("/api/tasks",task).then((response)=>response.data);
   return result;
}
export async function signup(user){
   const result  = await httpAxios.post("/api/users",user).then((response)=>response.data);
   return result;
}