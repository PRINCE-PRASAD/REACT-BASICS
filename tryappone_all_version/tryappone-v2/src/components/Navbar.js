import React from "react";
import PropTypes from "prop-types";


export default function Navbar(props) {
  return (<div>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>)
}
Navbar.propTypes = {
    title: PropTypes.string/*.isRequired*/,   /*propType is use for define ur propstype is string/numerial or any thing else*/
   aboutText: PropTypes.string/*.isRequired*/   /* isrequrided is use for if u forget any proptype or props is will show error in the console*/
}

Navbar.defaultProps = {     /* default propsc is use for if u forget to define any props it can automaticly provide this default props*/ 
    title: "set title here",
    aboutText: 'About'
};

//here we use Bootstrap for navbar
//i change all the class tag into className by ctrl+f {find and replace for all}
//i change all the href="#" tag into href="/" by ctrl+f {find and replace for all}
//And all <> will change </>  or > to />
//if u creat any components the u have to import that particular component by usding thisa code " import Navbar from './components/Navbar';  "
// by using props u can easily use one componet to different projets or app u have to bjust share the particular component
//if u write any js code u have to use curlty brackets "{}"



