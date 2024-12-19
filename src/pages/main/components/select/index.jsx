import { Container, Label, SelectComponent } from './styles';

const Select = (props) => {
    return (
        <Container>
            <Label>{props.title}</Label>
            <SelectComponent placeholder={props.title} width={props.width}/>
        </Container>
    )
}

export default Select;