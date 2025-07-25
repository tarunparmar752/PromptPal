import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
