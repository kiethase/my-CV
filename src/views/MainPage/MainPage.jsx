import React, { Suspense } from 'react';
import { BodyWrapper, BodyInsideWrapper } from './Style';
import Title from '../../components/Title/Title';
import FormData from '../../components/Form/FormData';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import Model  from './../../assets/cat/Cat.jsx';
import { useGLTF } from '@react-three/drei';
import { CatModel } from '../../assets/cat/Cat';
import { CatMovingModel } from '../../assets/cat/CatMoving';

// data
import { DataInForm } from '../../data/Data';

const MainPage = (props) => {
    const { themeWeb } = props;

    return (
        <BodyWrapper themeWeb={themeWeb}>
            <BodyInsideWrapper themeWeb={themeWeb}>
                <Canvas
                    camera={{                      
                         fov: 85,
                         near: 100, far: 1000,
                         position: [280,280,550.25 ]
                        }}
                    style={{
                        width: '50vw',
                        height: '25vh',
                    }}
                >
                    <ambientLight intensity={1.25} />
                    <ambientLight intensity={0.1} />
                    <directionalLight intensity={0.4} />
                    <Suspense fallback={null}>
                        <CatMovingModel />
                    </Suspense>
                    <OrbitControls />
                </Canvas>

                <Title />

                {DataInForm ? (
                    DataInForm.length > 0 ? (
                        DataInForm.map((data, index) => (
                            <FormData data={data} key={index} />
                        ))
                    ) : (
                        <div>No data!</div>
                    )
                ) : null}
            </BodyInsideWrapper>
        </BodyWrapper>
    );
};
export default MainPage;
