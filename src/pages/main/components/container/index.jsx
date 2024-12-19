import { Box, Button } from './styles';
import Column from '../column';
import { MdKeyboardArrowDown, MdAdd } from 'react-icons/md'
const Container = () => {
    return (
        <Box>
            <Button><MdKeyboardArrowDown /></Button>
            <Column width="18.75%"></Column>
            <Column width="25%"></Column>
            <Column width="9.375%"></Column>
            <Column width="12.5%"></Column>
            <Column width="15.625%"></Column>
            <Column width="18.75%"></Column>
            <Button><MdAdd /></Button>
        </Box>
    )
}

export default Container;