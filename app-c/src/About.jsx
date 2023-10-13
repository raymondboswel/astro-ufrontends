
export const About = () => {
  return     <section class="flex flex-col gap-8 p-4 bg-gradient-to-r from-cyan-100 to-blue-400 border shadow m-10 rounded items-center">
      <h1 class="text-2xl font-bold text-slate-700">Solid Microfrontend: About</h1>
      <div style={{display: "flex", gap: "16px"}}>
        This application shows how nested routes can be handled within a Solid uFrontend, as part of a larger Astro 
        application. Notice that you can navigate all the way to /users/1?name=Raymond&email=raymond@example.com, refresh the page, and still get redirected
        to the correct place in the application. Also note that this app is not meant to show case typical data fetching patterns. 
      </div>
    </section>

}
