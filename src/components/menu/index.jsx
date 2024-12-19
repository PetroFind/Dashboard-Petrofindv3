import React, { useState, useEffect } from "react";

import { Container, Header } from "./styles";

import { MdMenuOpen, MdMenu } from "react-icons/md";


import Dropdown from "./components/dropdown";
import DropdownPage from "./components/dropdownPage";
import Title from "./components/title";

const Menu = () => {
    
    const [open, setOpen] = useState(false)
    return (
        <Container open={open}>
            <Header justify={open}>
                {
                    open ?
                        <MdMenuOpen size={24} onClick={() => setOpen((prev) => !prev)} />
                        :
                        <MdMenu size={24} onClick={() => setOpen((prev) => !prev)} />
                }
            </Header>
            <Title title="página principal" />
            <Dropdown open={open} title={open ? true : false} />
            <Title title="todas páginas" />
            <DropdownPage open={open} title={open ? true : false} />
        </Container>
    );
};

export default Menu;