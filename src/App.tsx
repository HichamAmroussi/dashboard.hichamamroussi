// Import Packages
import { Route, Routes } from "react-router-dom";
// Import Components
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/write-testimonial" element={<Testimonial />} />
    </Routes>
  );
}

export default App;
