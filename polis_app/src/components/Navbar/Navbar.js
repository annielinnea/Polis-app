import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Slider/Button"
import './Navbar.css'
import checkBox from "./Checkbox";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Polisen<img id="logo"></img></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <filter />
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    <li>
                        {checkBox()}
                    </li>
                </ul>
                <Button>Registrera</Button>

                <Button>Logga in</Button>
            </nav>
        )
    }
}

export default Navbar