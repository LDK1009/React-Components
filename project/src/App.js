import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <div>
      <Router>
        {/* 라우터 정의 */}
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/carousel" element={<Page2 />} />
          <Route path="/path-animation" element={<Page3 />} />

          {/* 404 페이지 처리 */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
