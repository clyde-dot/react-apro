import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/ui/Header/Header"
import Footer from "./components/ui/Footer/Footer"

import Home from "./views/home/Home"
import About from "./views/about/About"

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}
