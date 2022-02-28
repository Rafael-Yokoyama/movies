
import Routes from "./routes"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer
        autoClose={2000}
        theme={"colored"}
      />
    </div>
  );
}

