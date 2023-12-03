import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css'
import Header from  "./Header"
import MainBody from "./MainBody";
import Footer from "./Footer";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <Header/>
    <MainBody/>
    <Footer/>
</React.StrictMode>
);

