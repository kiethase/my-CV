import React from 'react';

import {
    AppbarWrapper,
    BoxWrapper,
    LeftBoxWrapper,
    RightBoxWrapper,
    IconAndNicknameWrapper,
    TabWrapper,
    Logo,
    Name,
} from './Style';

import {ButtonTheme} from "../Button/Button";

const Appbar = (props) => {
    const {themeWeb} = props;
    return (
        <AppbarWrapper themeWeb={themeWeb}>
            <BoxWrapper>
                <LeftBoxWrapper>
                    <IconAndNicknameWrapper>
                        <Logo themeWeb={themeWeb}/>

                        <Name>KietHASE </Name>
                    </IconAndNicknameWrapper>
                    <TabWrapper>
                        Work
                    </TabWrapper>
                    <TabWrapper>
                        More
                    </TabWrapper>
                </LeftBoxWrapper>
                <RightBoxWrapper>
                    <ButtonTheme setTheme={props.setTheme} themeWeb={themeWeb}/>
                </RightBoxWrapper>
            </BoxWrapper>
        </AppbarWrapper>
    );
};

export default Appbar;
