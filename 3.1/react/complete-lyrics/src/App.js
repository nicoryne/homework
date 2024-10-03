import "./App.css";
import CompleteLyrics from "./components/CompleteLyrics";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Navigate replace to="singer" />} />
            <Route path="singer" element={<CompleteLyrics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
