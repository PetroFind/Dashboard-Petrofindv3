import { Container } from './styles';
import Filter from './components/filter'

const Column = (props) => {
    return (
        <Container width={props.width} >
            {props.title ?? ""}
            {props.filter && <Filter />}
        </Container>
    )
}

export default Column;