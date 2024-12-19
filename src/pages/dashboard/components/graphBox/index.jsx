import { Container } from './styles';

const GraphBox = (props) => {
    return (
        <Container height={props.height} width={props.width}>
            {props.children}
        </Container>
    )
}

export default GraphBox;