import React from 'react'
import About from './Inc/About'
import FAQ from './Inc/FAQ'
import InstructorsSlide from './Inc/InstructorsSlide'
import TopSection from './Inc/TopSection'

export default function Home() {
    return (
        <>
            <TopSection />
            <About />
            <InstructorsSlide />
            <FAQ />
        </>
    )
}
