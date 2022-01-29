import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/banner/Banner';
import AboutUs from './components/about-us/AboutUs';
import Section from './components/Section/Section';
import Faq from "./components/faqSec/Faq";
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import faq from "./components/faqSec/faq.css"

const App = () => {
  return (
    <Router>
    <Navbar />
    <Banner />
    <AboutUs />
    <Section />
    <Card />
    <Faq />
    <Footer />
    </Router>
    
  );
};

export default App;


