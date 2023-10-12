import { Outlet, A } from "@solidjs/router"
export function PageWrapper () {
  return <div>
    <h1> We love our users! </h1>
    
    <Outlet/>
    <A href="1">View user details</A>
    <br />
    <A href="/">Back Home</A>
   
  </div>
}
