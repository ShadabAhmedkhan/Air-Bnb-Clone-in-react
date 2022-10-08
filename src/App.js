import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"
import Styles from "./App.css"
export default function App() {
    const Cards = Data.map(item =>{
     return   <Card 
                key={item.id}
                {...item}
            />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {Cards}
            </section>
        </div>
    )
}