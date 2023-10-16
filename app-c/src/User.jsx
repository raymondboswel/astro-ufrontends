
  import {  useSearchParams } from "@solidjs/router";
import {onMount } from 'solid-js'
import {setCount } from "./Root"


export const User = () => {
    onMount(() => {
      setCount(count => count + 1)
})

  const [params]= useSearchParams();
  console.log(params)
  return <section class="flex flex-col ">
    <h1 class="text-lg mb-2 underline font-bold text-center">User Details</h1>
    <div class="flex justify-between w-96">
      <span>Name:</span> 
      <span>{params.name}</span>
   </div>
    <div class="flex justify-between w-96">
      <span>Email: </span>
      <span>{params.email}</span>
    </div>
</section>

}
