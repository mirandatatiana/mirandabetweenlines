
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
