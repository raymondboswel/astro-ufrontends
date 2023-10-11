
import { Router, Routes, Route} from "@solidjs/router"
import App from './App';
import {About } from './About'
import { Contact} from "./Contact" 

function Root() {
  return (    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/about" component={About} /> {/* 👈 Define the about page route */}
        <Route path="/contact" component={Contact} /> {/* 👈 Define the contact page route */}
      </Routes>
    </Router>
)
}

export default Root
