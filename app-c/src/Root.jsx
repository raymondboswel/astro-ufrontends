
import { Router, Routes, Route} from "@solidjs/router"
import App from './App';
import {About } from './About'
import { Contact} from "./Contact" 
import {PageWrapper } from "./PageWrapper"
import { User } from "./User"
import { Users } from "./Users"


function Root() {
  console.log("Rendering Root")
  const baseUrl = import.meta.env.PROD === "/fe-c" ? "/fe-c" : "/"
  return (    <Router base={baseUrl}>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/about" component={About} /> 
        <Route path="/contact" component={Contact} /> 
        <Route path="/users" component={PageWrapper}>
          <Route path="/" component={Users}/>
          <Route path="/:id" component={User} />
        </Route>
      </Routes>
    </Router>
)
}

export default Root
