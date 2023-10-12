import { A } from "@solidjs/router";
import styles from "./App.module.css";

function App() {
  console.log("Rendering App")
  return (
    <section className={styles["app-c"]}>
      <h1>App C?</h1>
      <div style={{display: "flex", gap: "16px"}}>
      <A href="/about">About Solid</A>
      <A href="/contact">Contact me</A>
      <A href="/users">Users</A>
</div>

    </section>
  );
}

export default App;
