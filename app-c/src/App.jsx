import { A } from "@solidjs/router";
import styles from "./App.module.css";

function App() {
  return (
    <section className={styles["app-c"]}>
      <h1>App c</h1>
      <div style={{display: "flex", gap: "8px"}}>
      <A href="/about">About</A>
      <A href="/contact">Contact</A>

</div>

    </section>
  );
}

export default App;
