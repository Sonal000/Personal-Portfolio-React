import './Profile.css'


const Profile = ()=>{



 return(


  
  <section id="home" className="profile">
  {/* <!-- intro --> */}
  <div className="profile-intro  section-center section-select">
    <div className="profile-info">

      <h2>I'm Sonal</h2>
      <p>freelance web & mobile UI/UX designer </p>
      <a href="hire.html" className="btn btn-hire hire-me">hire me</a>
        <ul className="profile-icons">
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
        </ul>
      </div>
      <div className="profile-img">
        {/* <!-- <img className="profile-photo"   src="./images/profile.jpg" alt=""> --> */}
        <img className="profile-photo"   src="./images/worrior.png" alt=""/>
      </div>
      
    </div>
</section>


 );


}
export default Profile;