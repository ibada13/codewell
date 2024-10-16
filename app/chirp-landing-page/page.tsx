'use client';
import Home from "./components/Home";
import Features from "./components/Features";
import Clients from "./components/Clients";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
export default function page() { 
    return (
        <div className="h-screen w-screen flex flex-col items-center overflow-x-hidden">
            <Home />
            <Features />
            <Clients />
            <Plans />
            <Footer />
        </div>
    );
}