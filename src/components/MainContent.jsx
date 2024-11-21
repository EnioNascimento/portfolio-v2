import React from 'react'

import AboutContainer from './AboutContainer'
import TechContainer from './TechContainer'
import Projects from './Projects'

import '../styles/components/maincontent.sass'

const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechContainer />
            <Projects />
        </main>
    )
}

export default MainContent