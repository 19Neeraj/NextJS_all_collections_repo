import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task){
   const result  = await httpAxios.post("/api/tasks",task).then((response)=>response.data);
   return result;
}
export async function userPosts(userId){
   const result  = await httpAxios.get(`/api/users/${userId}/tasks`).then((response)=>response.data);
   return result;
}
export async function allPosts(){
   const result  = await httpAxios.get(`/api/tasks`).then((response)=>response.data);
   return result;
}
export async function deletePosts(postid){
   const result  = await httpAxios.delete(`/api/tasks/${postid}`).then((response)=>response.data);
   return result;
}