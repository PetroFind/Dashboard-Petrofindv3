import { useState } from 'react';

import { Container, Box, Items, Item, Icon } from './styles';

import { MdOutlineGridView, MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

const dropdownPage = (props) => {

  const navigate = useNavigate();
    const [open, setOpen] = useState(() => {
        return false;
      })
    
      const handleClick = () => {
        setOpen((prev) => prev === false ? true : false);
      }

return (
    <Container>
    <Box onClick={handleClick}>
    <section>
    <MdOutlineGridView size={24}/>
    {
        props.title &&
        "Bacias"
      }
    </section>
      {
        open === false ? <MdOutlineKeyboardArrowDown size={24}/> : <MdKeyboardArrowUp size={24}/>
      }

    </Box>
    {open && (
      <Items>
        <Item onClick={() => navigate("/")}><Icon/>Criar</Item>
        <Item><Icon/>Visualizar</Item>
      </Items>
    )}
    </Container>
)
}

export default dropdownPage;