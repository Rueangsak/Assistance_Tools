import "./App.css";
import Main from "./pages/Main";
import { Routes,Route,BrowserRouter,Link, Navigate ,Redirect  } from "react-router-dom";
import Work from "./pages/Work";
import './style.css'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={< Main />} />
            <Route path="/Work" element={<Work />} />
          </Routes>
      </BrowserRouter>
      

    </div>
  );
};

export default App;
