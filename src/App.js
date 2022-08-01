
import './App.css';
import AppBar from "./components/Appbar/Appbar";
import BodyPage from "./views/MainPage/MainPage";
import { Layout } from "./theme/theme";

import React from 'react';

const App = () => {

  // let themeGet = localStorage.getItem("THEME");
  const [themeWeb, setTheme] = React.useState("false");


  React.useEffect(() => {
    const themeGet = localStorage.getItem('THEME');

    setTheme(themeGet);

  }, [themeWeb]);


  return (
    <div className="App">
      <Layout themeWeb={themeWeb}>
        <AppBar setTheme={setTheme} themeWeb={themeWeb} />
        <BodyPage themeWeb={themeWeb}/>

      </Layout>


    </div>
  );
}

export default App;

