import "./App.css";
import NotesHome from "./components/NotesHome";
// npm i react-router-dom

import NewNote from "./components/NewNote";
import EditNote from "./components/EditNote";
import Error404 from "./components/Error404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NotesHome />} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/edit" element={<EditNote />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
