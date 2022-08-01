import styled from 'styled-components';

import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';

export const ButtonTheme = (props) => {
    const { themeWeb } = props;
    const handleChangeTheme = () => {
        let themeGet = localStorage.getItem('THEME');

        if (themeGet === 'false') {
            localStorage.setItem('THEME', true);
            props.setTheme('true');
        } else {
            localStorage.setItem('THEME', false);
            props.setTheme('false');
        }
    };
    return (
        <ButtonThemeWrapper onClick={handleChangeTheme} themeWeb={themeWeb}>
            <IconButton themeWeb={themeWeb} />
        </ButtonThemeWrapper>
    );
};

export const Button = () => {
    return <></>;
};

/// Theme Button
const ButtonThemeWrapper = styled.button`
    background: ${({ themeWeb }) =>
        themeWeb === 'false' ? '#010102c1' : '#5daaf1d5'};

    cursor: pointer;
    border-radius: 20%;
    height: 40px;
    width: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconButton = styled.div`
    height: 18px;
    width: 18px;

    background: url(${({ themeWeb }) => (themeWeb === 'false' ? moon : sun)});

    background-size: cover;
`;
