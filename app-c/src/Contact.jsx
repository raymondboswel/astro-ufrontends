import { onMount } from "solid-js"

import {setCount } from "./Root"

export const Contact = () => {
    onMount(() => {
      setCount(count => count + 1)
})
    return     <section class="flex flex-col gap-8 p-4 bg-gradient-to-r from-cyan-100 to-blue-400 border shadow m-10 rounded items-center">
      <h1 class="text-2xl font-bold text-slate-700">Solid Microfrontend: Contact page</h1>
      <div style={{display: "flex", gap: "16px"}}>
      
      </div>
    </section>

}
