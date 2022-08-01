import styled from 'styled-components';

const transitionValue = '0.1s';
export const Layout = styled.div`
    color: ${({ themeWeb }) =>
        themeWeb === 'false' ? '#000000' : '#FFFFFF'} !important;
    div {
        transition: ${transitionValue};
    }
    span {
        transition: ${transitionValue};
    }
    h1 {
        transition: ${transitionValue};
    }
`;
