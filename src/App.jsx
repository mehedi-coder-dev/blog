import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetials from "./pages/BlogDetials";
import BlogByCategory from "./pages/BlogByCategory";

const App = () => {
  return (
<BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/BlogDetils/:id" element={<BlogDetials/>}/>
     <Route path="/BlogByCategory/:CategoryID" element={<BlogByCategory/>}/>
   </Routes>
</BrowserRouter>
  );
};

export default App;
