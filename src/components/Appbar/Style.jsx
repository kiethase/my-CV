import styled from 'styled-components';
import logo1 from '../../assets/cat4.png';
import logo2 from '../../assets/cat.png';
import logo3 from '../../assets/cat5.png';


export const AppbarWrapper = styled.div`
    width: 100%;
    position: fixed;
    background: ${({ themeWeb }) => themeWeb === "false" ? "#98b6ef60" : "#2929296a"} ;
    height: 50px;
    display: flex;
    justify-content: center;
    z-index: 2;
`;

export const BoxWrapper = styled.div`
    width: 70%;
    /* background-color: #00800043; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10%;
    padding: 10px;
`;

export const LeftBoxWrapper = styled.div`
    width: fit-content;
    /* background: #ffff0066; */
    display: flex;
    gap: 20px;
`;
export const RightBoxWrapper = styled.div`
    width: fit-content;

    display: flex;
    gap: 20px;
  
`;
export const IconAndNicknameWrapper = styled.div`
    width: fit-content;
    display: flex;
`;

export const TabWrapper = styled.div`
    cursor: pointer;

    &:hover {
        color: #0a0a53;
        border-bottom: 3px solid #0a0a536a;
    }
`;
/// Detail of appbar

export const Logo = styled.div`
    width: 27px;
    height: 27px;
    margin-right: 8px;
    background: url(${({themeWeb})=>  themeWeb === "false"? logo3 : logo1});
    background-size: cover;
    transition: 0.4s;
    &:hover {
        background: url(${logo2});
        background-size: cover;
    }
`;
export const Name = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
`;
