import { Router, Routes, Route} from "@solidjs/router"
import App from './App';
import {About } from './About'
import { Contact} from "./Contact" 
import {PageWrapper } from "./PageWrapper"
import { User } from "./User"
import { Users } from "./Users"
import './index.css';
import { createSignal, Show, onMount } from "solid-js";

export const [baseUrl , setBaseUrl ]= createSignal();
export const [count, setCount] = createSignal(0);

export const [cssUrl, setCssUrl] = createSignal();
export const [cssLoaded, setCssLoaded] = createSignal();


function RoutesDefinition(props) {
  return <Router base={props.baseUrl}>
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
}

function Root(props) {
  const isProd = import.meta.env.PROD;
  const baseUrl = isProd ? "/fe-c" : "/"
  setBaseUrl(baseUrl);

  async function getManifest() {
    if(isProd) {
      const mf = await fetch("/manifest-c.json");
      const json = await mf.json();
      setCssUrl("/" + json["src/Root.css"]["file"]);
    }
}

  onMount(() => {
    getManifest()
  });

   // When in production mode, the css must be fetched using the hashed file name
  // found in the manifest. This component therefore fetches the file reference,
  // and then when css file is loaded, displays the rest of the application

  return (    
    <>
    <Show when={isProd} fallback={<RoutesDefinition baseUrl={baseUrl}/>}>
      <Show when={cssUrl()}>
        <link href={cssUrl()} rel="stylesheet" onLoad={() => setCssLoaded(true)} />
      </Show>
      <Show when={cssLoaded()}>
         <RoutesDefinition baseUrl={baseUrl}/>
      </Show>
    </Show>   
    <section class="mt-8 ml-8">
          <div>Global state (counts navigations): {count()}</div>
     <div class="underline text-cyan-800" onClick={() => props.onNavigate()}>To Parent</div>

</section>
   </>
)
}

export default Root
