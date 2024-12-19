import { Container, Label, InputComponent } from './styles';
import { MdOutlineSearch } from 'react-icons/md'
const Input = (props) => {
    return (
        <Container>
            <Label>{props.title}</Label>
            <InputComponent placeholder={props.title} width={props.width}/>
        </Container>
    )
}

export default Input;