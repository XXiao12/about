import React from 'react';
import PropTypes from 'prop-types';
import close from '../../img/menu/close.svg';
import { Link } from 'react-router-dom'

import './styles.css';

const MobileNav = (props = {}) => {
    const {
        onClick,
        hidden
    } = props;

    return hidden ?
        <div className="mobilenav__hidden"/> :
        <div className="mobilenav">
            <button onClick={onClick} ><img src={close} alt="close" /></button>
            <div>
                <Link
                    className="links--themeblack"
                    to="/portfolio">
                    Portfolio
            </Link>
                <Link
                    className="links--themeblack"
                    to="/about">
                    About
            </Link>
            </div>
        </div>
};

MobileNav.propTypes = {
    onClick: PropTypes.func,
    hidden: PropTypes.bool
};

export default MobileNav;