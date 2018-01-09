import React, {Component} from 'react';
import classes from './Header.css';

class Header extends Component {
    render() {
        return (
            <header className={classes.header}>
                <h1>HEADER</h1>
            </header>
        );
    }
}

export default Header;