import Hello from "./components/Hello";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is Childer props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Spiderman" />
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="Superman"></Welcome>
      <Welcome name="Diana" heroName="Spiderman"></Welcome> */}
    </div>
  );
}

export default App;
