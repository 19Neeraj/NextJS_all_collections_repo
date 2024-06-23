import { NextResponse } from 'next/server'
import { toast } from "react-toastify";

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // console.log("middleware excuted");
const authToken=request.cookies.get("authToken")?.value;
console.log(authToken);
if(request.nextUrl.pathname=='/api/login'||request.nextUrl.pathname==="/api/users"||request.nextUrl.pathname==="/api/signup"||request.nextUrl.pathname==="/api/tasks"){
  return
}
const logedinNotAccesspath = request.nextUrl.pathname === "/log_in" || request.nextUrl.pathname === "/signup";
if (logedinNotAccesspath){
  if(authToken){
    toast.warn("your already loged in");
  return NextResponse.redirect(new URL('/home', request.url))
  }
 
} else{
  if(!authToken){

  if(request.nextUrl.pathname.startsWith("/api")){
    return NextResponse.json({
      message:"assess Denied",
      success:false,
    },{status:401})
  }
  return NextResponse.redirect(new URL('/log_in', request.url))
  }else{

  }
}

//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
'/api/:path*', 
'/add-task',
'/signup',
'/show-task',
'/log_in',
],
}