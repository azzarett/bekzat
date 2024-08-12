import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WebRu from "./components/Web/WebRu";
import WebKz from "./components/Web/WebKz";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/ru" element={<Layout />} >
          <Route index element={<WebRu />}/>
        </Route>
        <Route path="/" element={<Layout />} >
          <Route index element={<WebKz />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
