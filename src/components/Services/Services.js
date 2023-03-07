import './Services.css'



const Services = ()=>{


 return(

  <section id="services" className="services">
  <div className="service-container section-center section-select">
    <div className="service-title">
      <h2>services</h2>
    </div>
    <div className="service-cards">

      {/* <!-- service card --> */}
      <div className="service-card">
        {/* <!-- service icon --> */}
        <div className="card-icon">
          <i className="fa-brands fa-sketch"></i>
        </div>
        <div className="card-title">
          <h4>web development</h4>
        </div>
        <div className="card-text">Web development is the work involved in developing a website for the Internet or an intranet. </div>
      </div>
      {/* <!-- end of service card --> */}
      {/* <!-- service card --> */}
      <div className="service-card">
        {/* <!-- service icon --> */}
        <div className="card-icon">
          <i className="fa-solid fa-pen-nib"></i>
        </div>
        <div className="card-title">
          <h4>web design</h4>
        </div>
        <div className="card-text">Web design encompasses many different skills and disciplines in the production and maintenance of websites.</div>
      </div>
      {/* <!-- end of service card --> */}
      {/* <!-- service card --> */}
      <div className="service-card">
        {/* <!-- service icon --> */}
        <div className="card-icon">
          <i className="fa-brands fa-android"></i>
        </div>
        <div className="card-title">
          <h4>app design</h4>
        </div>
        <div className="card-text"> app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. </div>
      </div>
      {/* <!-- end of service card --> */}
    </div>
  </div>
</section>



 );
}

export default Services;