import React from 'react';
import {Outlet} from "react-router-dom";

const Loyout = () => {
    return (
        <>
            <Outlet/>
            <footer><p>2.02.24</p></footer>
        </>
    );
};

export default Loyout;