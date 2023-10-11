
import { Router, Routes, Route} from "@solidjs/router"
import App from './App';
import {About } from './About'
import { Contact} from "./Contact" 

function Root() {
  console.log("Rendering Root")
  return (    <Router base="/fe-c">
      {/* <A href="/about">About</A> */}
      {/* <A href="/contact">Contact</A> */}

      <Routes>
        <Route path="/" component={App} />
        <Route path="/about" component={About} /> 
        <Route path="/contact" component={Contact} /> 
      </Routes>
    </Router>
)
}

export default Root
