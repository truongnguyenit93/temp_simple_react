import React, {Fragment} from 'react';
import './App.css';
import TopMenu from "./Component/topmenu/TopMenu";
import Header from "./Component/Header/Header";
import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
        <TopMenu/>
        <Header/>
        <Content image="img/01.jpg" title="Cach su dung props bang class1" location_1="order-lg-2" location_2="order-lg-1"/>
        <Content image="img/02.jpg" title="Cach su dung props bang class2" location_1="order-lg-1" location_2="order-lg-2"/>
        <Content image="img/03.jpg" title="Cach su dung props bang class3" location_1="order-lg-2" location_2="order-lg-1"/>
        <Footer/>
    </div>
  );
}

export default App;
