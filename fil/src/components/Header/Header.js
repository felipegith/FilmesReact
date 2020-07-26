import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends Component{

    render(){
        return(
            <div className="header">
                
                <Link to="/">Loca-WEB</Link>
                <img src={require('./assets/fiw.png')} className="img"/>
            </div>
        )
    }
}

export default Header;