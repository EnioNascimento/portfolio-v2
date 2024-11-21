import React from 'react'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import Avatar from '../img/small.jpg'

import '../styles/components/sidebar.sass'


const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <img src={Avatar} alt="Enio Nascimento" />
            <p className="title">Desenvolvedor Front-end</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar