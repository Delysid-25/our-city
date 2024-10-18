import { Route, Routes, Navigate } from "react-router-dom";

import Issue5 from "./pages/Issue5";
import Issue4 from "./pages/Issue4";
import Issue3 from "./pages/Issue3";
import Issue2 from "./pages/Issue2";
import Issue1 from "./pages/Issue1";

import Issue6 from "@/pages/Issue6";

function App() {
  return (
    <Routes>
      <Route element={<Issue6 />} path="/issue6" />
      <Route element={<Issue5 />} path="/issue5" />
      <Route element={<Issue4 />} path="/issue4" />
      <Route element={<Issue3 />} path="/issue3" />
      <Route element={<Issue2 />} path="/issue2" />
      <Route element={<Issue1 />} path="/issue1" />
      <Route element={<Navigate replace to="/issue6" />} path="/" />
    </Routes>
  );
}

export default App;
