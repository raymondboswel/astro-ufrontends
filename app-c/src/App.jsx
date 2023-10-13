import { A } from "@solidjs/router";

function App() {
  return (
    <section class="flex flex-col gap-8 p-4 bg-gradient-to-r from-cyan-100 to-blue-400 border shadow m-10 rounded items-center">
      <h1 class="text-2xl font-bold text-slate-700">Solid Microfrontend</h1>
      <div style={{display: "flex", gap: "16px"}}>
        <A class="underline text-cyan-800" href="/about">About Solid</A>
        <A class="underline text-cyan-800" href="/contact">Contact me</A>
        <A class="underline text-cyan-800" href="/users">Users</A>
      </div>
    </section>
  );
}

export default App;
