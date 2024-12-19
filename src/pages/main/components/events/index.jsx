import { Container, Button } from './styles';
import { MdDelete, MdAdd } from 'react-icons/md';
const Events = () => {
    return (
        <Container>
            <Button><MdDelete size={24}/></Button>
            <Button><MdAdd size={24}/></Button>
        </Container>
    )
}

export default Events;