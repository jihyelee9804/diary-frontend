// // "./util" 파일에서 getEmotionImgById 변수를 import 한다.
// import { getEmotionImgById } from "./util";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route 컴포넌트의 path 속성과 element 속성을 지정한다. */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;