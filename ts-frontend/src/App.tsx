import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarWithHeader from "./components/sidenav/SideNav";
import Home from "./pages/Home";
function App() {
    return (
        <BrowserRouter>
            <SidebarWithHeader>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </SidebarWithHeader>
        </BrowserRouter>
    );
}

export default App;
