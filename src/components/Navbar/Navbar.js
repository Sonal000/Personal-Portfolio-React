import React, { useState } from 'react'; 
import './Navbar.css'



function Navbar(props){

  const [flag ,setFlag] = useState(false);

    const navOpen =()=>{
      setFlag(true);
      console.log('open');
    };
    const navClose =()=>{
      console.log('close');
      setFlag(false)
    };


 return(
  <div>
  <nav className="nav" id="nav">
  <div className="nav-center">
    {/* <!-- nav header --> */}
    <div className="nav-header">
      <div className="nav-icon nav-logo">
        <h3>
       Sonal <span>Induwara</span>
        </h3>
      </div>

      <button onClick={navOpen}  className="nav-btn" id="nav-btn">
        <i className="fas fa-bars"></i>
      </button>
    </div>
    {/* <!-- nav-links --> */}
    <ul className="nav-links">
      <li>
        <a className="scroll-link" href="#home">home</a>
      </li>
      <li>
        <a className="scroll-link" href="#about">about</a>
      </li>
      <li>
        <a className="scroll-link" href="#work">Work</a>
      </li>
      <li>
        <a className="scroll-link" href="#services">Services</a>
      </li>
      <li>
        <a className="scroll-link" href="#contact">contact</a>
      </li>
    </ul>
  </div>
</nav>

<div className={`sidebar ${flag ? 'show-sidebar' : ''}`} id="sidebar">
<div>
  <button onClick={navClose}  className="close-btn" id="close-btn">
    <i className="fas fa-times"></i>
  </button>
  {/* <!-- nav-links --> */}
  <ul className="sidebar-links">
    <li>
      <a className="scroll-link" href="#home">home</a>
    </li>
    <li>
      <a className="scroll-link" href="#about">about</a>
    </li>
    <li>
      <a className="scroll-link" href="#work">work</a>
    </li>
    <li>
      <a className="scroll-link" href="#services">services</a>
    </li>
    <li>
      <a className="scroll-link" href="#contact">contact</a>
    </li>
  </ul>
  {/* <!-- social icons --> */}
    <ul className=" social-icons ">
      <li>
        <a href="https://www.facebook.com/sonal.induwara.9/" className="social-icon" target="blank"><i className="fab fa-facebook"></i></a>
      </li>
      <li>
       <a href="https://www.instagram.com/sonal_induwara_/" className="social-icon" target="blank"><i className="fab fa-instagram"></i></a>
      </li>
      <li>
        <a href="https://twitter.com/" className="social-icon" target="blank"><i className="fab fa-twitter"></i></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sonal-induwara-63432323b/" className="social-icon" target="blank"><i className="fab fa-linkedin"></i></a>
      </li>
  </ul >
</div>
</div>

</div>


 );


}

export default Navbar;