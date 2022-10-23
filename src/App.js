import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Login from "./pages/dashboard/login/index";
import Home from "./pages/home/index";
import Programs from "./pages/programs/index";
import Posts from "./pages/posts/Listing";
import ListingBKK from "./pages/bkk/Listing";
// import DetailBKK from "./pages/bkk/DetailBkk";
import HistoriesBKK from "./pages/bkk/HistoriesBKK";
import DetailPost from "./pages/posts/Details";
import Teachers from "./pages/organization/teachers";
import Staff from "./pages/organization/staff";
import OrgStruct from "./pages/organization/orgstruct/OrgStruct";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/detail" element={<DetailPost />} />
        <Route path="/bkk" element={<ListingBKK />} />
        <Route path="/bkk/histories" element={<HistoriesBKK />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/organization" element={<OrgStruct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
