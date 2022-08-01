import React from 'react';
import { BodyWrapper, BodyInsideWrapper } from './Style';
import Title from '../../components/Title/Title';
import FormData from '../../components/Form/FormData';
// data
import { DataInForm } from '../../data/Data';
const MainPage = (props) => {
    const {themeWeb} = props;
    return (
        <BodyWrapper themeWeb={themeWeb}>
            <BodyInsideWrapper themeWeb={themeWeb}>
                <h1>Something cool here</h1>
                <Title />

                {DataInForm ? (
                    DataInForm.length > 0 ? (
                        DataInForm.map((data, index) => <FormData  data={data} key={index}  />)
                    ) : (
                        <div>No data!</div>
                    )
                ) : null}
            </BodyInsideWrapper>
        </BodyWrapper>
    );
};
export default MainPage;
