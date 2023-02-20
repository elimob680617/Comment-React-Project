import "./App.css";
import Discussion from "./container/discussion/Discussion";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;
