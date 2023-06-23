import React from "react";
import { NavLink } from "react-router-dom"

import Navuno from '../../common/Nav/Nav';
const Dashboard = () => {


    return (
        <div >
            <Navuno />
            <h1>este es el dash</h1>


            <NavLink to={"/form"}>
                <button>Subir producto</button>
            </NavLink>
        </div>
    );
};

export default Dashboard;
