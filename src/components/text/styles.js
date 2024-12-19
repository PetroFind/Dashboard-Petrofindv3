import styled from 'styled-components';

export const Paragraph = styled.div`
font-size: ${ ({ fontSize }) => fontSize };
font-weight: ${ ({ fontWeight }) => fontWeight };
`;