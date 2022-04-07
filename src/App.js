import Hello from "./components/Hello";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import "./App.css";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is Childer props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Welcome name="Clark" heroName="Superman"></Welcome>
      <Welcome name="Diana" heroName="Spiderman"></Welcome> */}
      {/* <Greet name="Diana" heroName="Spiderman" />
      <Welcome name="Bruce" heroName="Batman"></Welcome> */}
    </div>
  );
}

export default App;
