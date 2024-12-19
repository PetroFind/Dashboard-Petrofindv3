import { Container } from './styles';

const Title = (props) => {
    return (
        <Container>
            {props.title ?? "Título"}
        </Container>
    )
}

export default Title;