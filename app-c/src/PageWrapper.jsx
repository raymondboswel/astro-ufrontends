import { Outlet, A } from "@solidjs/router"
import { createEffect, createSignal } from "solid-js"
export function PageWrapper () {
  return <div class="flex flex-col gap-8 p-4 bg-gradient-to-r from-cyan-100 to-blue-400 border shadow m-10 rounded items-center">
    <h1 class="text-2xl font-bold text-slate-700">Users</h1>
    
    <Outlet/>
    {/* <A href="1">View user details</A> */}
    <A href="/">Back Home</A>
   
  </div>
}

