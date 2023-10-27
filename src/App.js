

import AnimeItem from "./Components/AnimeItem.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage.js";
import Gallery from "./Components/Gallery.js";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/anime/:id" element={<AnimeItem/>}/>
          <Route path="/character/:id" element={<Gallery/>}/>
        </Routes>
      
      </BrowserRouter>
  );
}

export default App;
