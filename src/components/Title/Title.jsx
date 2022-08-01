import styled from 'styled-components';
import Ava from '../../assets/ava.jpg';

const Title = () => {
    return (
        <TitleWrapper>
            <LeftWrapper>
                <AvatarCv src={Ava}/>
            </LeftWrapper>
            <RightWrapper>
                <Name>Huynh Anh kiet</Name>
                <Slogan>(( -- Stop being negative - just do something -- ))</Slogan>
            </RightWrapper>
        </TitleWrapper>
    );
};
export default Title;

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;
const LeftWrapper = styled.div`
    width: fit-content;
    display:flex;
    justify-content: center;
    align-items: center;
  
`;
const RightWrapper = styled.div`
    padding-top: 10px;
    width: fit-content;
    display: flex;
    flex-direction: column;
`;

// Detail title
const AvatarCv = styled.img`
    border: 3px solid #fcfcfcad;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`;

const Name = styled.span`
    font-size: 1.8rem;
    font-weight: bold;
  
`;
const Slogan = styled.span`
    font-weight: 500;
    font-style: italic;
`;