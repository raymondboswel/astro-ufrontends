
import { Router, Routes, Route} from "@solidjs/router"
import App from './App';
import {About } from './About'
import { Contact} from "./Contact" 
import {PageWrapper } from "./PageWrapper"
import { User } from "./User"
import { Users } from "./Users"


function Root() {
  console.log("Rendering Root")
  return (    <Router base="/fe-c">
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
