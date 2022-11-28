import "./styles.css";
import Display from "./Display";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Students</h1>
      <h2>Props Function Example</h2>
      <div className="list">
        <Display name="Lajja" class="BCA 2" />
      </div>
    </div>
  );
}
