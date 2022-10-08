import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { Header } from '@/components/Header';
import React from "react";

export function Portfolio(){
    return(
        <div className="portfolio">
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}