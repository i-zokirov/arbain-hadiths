import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarWithHeader from "./components/sidenav/SideNav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
function App() {
    return (
        <BrowserRouter>
            <SidebarWithHeader>
                <Routes>
                    <Route path="*" element={<Home />} />
                    {/* <Route path="/aloqa" element={<Contact />} /> */}
                </Routes>
            </SidebarWithHeader>
        </BrowserRouter>
    );
}

export default App;
