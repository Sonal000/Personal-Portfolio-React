import './About.css';



const About = ()=>{




 return (

   
 <section id="about" className="about ">
 <div className="about-center section-center section-select">
 {/* <!-- about image --> */}
 <div className="about-img">
   <img className="about-pic" src="./images/profile.jpg" alt=""/>
 </div>
 
 <div className="about-content">
   
   {/* <!-- about title --> */}
   <div className="about-title">
     <h2>about me</h2>
   </div>
   <div className="about-info">
     <div className="about-text">
       <p>Im a software developer with 3 years of experience . I'm from Sri Lanka .I code and create web elements for amazing people around the world</p>
     </div>
     <div className="about-details">
       <p><span>name :</span> sonal induwara</p>
       <p><span>age :</span> 22 y/O</p>
       <p><span>university :</span> university of colombo</p>
     </div>

     <div className="about-btn btn">
       <a href="about.html">About me</a>
     </div>
     
   </div>
 </div>
 
 

 </div>
 
</section>






 );
}

export default About;