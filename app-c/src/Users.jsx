import { For } from "solid-js";
import { useNavigate } from "@solidjs/router"
import {onMount } from 'solid-js'

import {setCount } from "./Root"

const UserItem = (props) => {
  return <section class="flex justify-between">
<span>{props.user.name}</span>
<span><button onClick={props.onClick}>View</button></span>
</section>
}


export const Users = () => {
    onMount(() => {
      setCount(count => count + 1)
})

  const users = [
    {name: "Raymond", email: "raymond@example.com", id: 1}, 
    {name: "Lisa",email: "lisa@example.com", id: 2},
    {name: "John",email: "john@example.com", id: 3}, 
    {name: "Taylor", email: "taylor@example.com", id: 4}];
  const navigate = useNavigate();

  function viewUser(user) {
    navigate(`/users/${user.id}?name=${user.name}&email=${user.email}`)
  }
  
  return <article class="w-1/3">
    <For each={users} >
      {user => 
      <UserItem user={ user} onClick={() => viewUser(user)} />
      }
</For>
</article> 
}
