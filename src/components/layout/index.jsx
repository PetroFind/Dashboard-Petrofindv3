import React, { useState, useEffect, useContext } from "react";

import Background from "../background";
import NavBar from '../navbar';
import Menu from '../menu';

import { Container } from "./styles";

const Layout = ({ children }) => {

    return (
        <Container>
            <Menu />
            <Background>
                <NavBar />
                {children}
            </Background>
        </Container>
    );
};

export default Layout;