import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import classes from "../app.module.sass"

const Navbar = () => {
    const counter=useSelector(state=>state.product.producted)
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to={"/"}>M a r k e t</NavLink>
                </li>
                <li>
                    <NavLink to={"/busket"}>B u s k e t</NavLink>
                </li>
            </ul>
            <div style={{color:"white",fontSize:"40px"}}>{counter.length}</div>
        </nav>
    );
};

export default Navbar;