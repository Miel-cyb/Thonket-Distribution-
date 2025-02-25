import React from "react";
import Header from "./pages/Header";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";




function App(){

    return(
        <>
            <Router>
            <Header/>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/mainPage" element={<MainPage/>} ></Route>
                </Routes>
            </Router>
        </>
    )

}
export default App;