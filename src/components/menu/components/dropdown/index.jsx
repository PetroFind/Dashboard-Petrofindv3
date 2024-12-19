import React, { useState, useContext } from 'react';

import { Container, Box, Items, Item, Icon } from './styles';

import { MdOutlineGridView, MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { useNavigate } from "react-router-dom";

const Dropdown = (props) => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(() => {
    return false;
  })

  const handleClick = () => {
    setOpen((prev) => prev === false ? true : false);
  }

  return (
    <Container>
      <Box open={props.open} onClick={handleClick}>
        <section>
          <MdOutlineGridView onClick={() => toggleTheme()} size={24} />
          {
            props.title &&
            "Dashboard"
          }
        </section>
        {
          open === false ? <MdOutlineKeyboardArrowDown size={24} /> : <MdKeyboardArrowUp size={24} />
        }

      </Box>
      {open && (
        <Items>
          <Item onClick={() => navigate("/dashboard")}>
            <Icon />Visualizar</Item>
        </Items>
      )}
    </Container>
  )
}

export default Dropdown;