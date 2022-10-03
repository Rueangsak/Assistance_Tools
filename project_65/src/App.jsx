import "./App.css";
import Main from "./pages/Main";
import { Routes,Route,BrowserRouter,Link, Navigate ,Redirect  } from "react-router-dom";
import Ws from "./pages/Ws";

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={< Main />} />
            <Route path="/Ws" element={<Ws />} />
          </Routes>
      </BrowserRouter>
      

    </div>
  );
};

export default App;
