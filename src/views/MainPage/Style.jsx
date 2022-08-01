import styled from 'styled-components';


export const BodyWrapper = styled.div`
    width: auto;
    height: 100vh;
    
    background: ${({ themeWeb }) => themeWeb === "false" ? "#96b4ed" : "#000000d8"} ;
    overflow: hidden;
    padding-top: calc(50px + 0px);
    padding-bottom: 7%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
 
`;

export const BodyInsideWrapper = styled.div`
    width: 45%;
    background: ${({ themeWeb }) => themeWeb === "false" ? "#ffffffb6" : "#0000009f"} ;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 30px;
    row-gap: 10px;
`;

