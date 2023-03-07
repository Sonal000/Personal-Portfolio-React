import './Work.css'


const Work = ()=>{



 return (


  <section id="work" className="work">
  <div className="work-center section-center section-select">
      <div className="work-title">
          <h2>my work experience</h2>
      </div>
      <div className="work-exp">
        {/* <!-- exp  --> */}
        <div className="exp-tile">

          <div className="exp-img-container">
            <img src="./images/visual-design.jpg" alt=""/>
          </div>
          <div className="exp-info">
            <h3>
              <span>Visual Designer</span>
              || self employed
              
            </h3>
            <p>Sri Lanka (2019)</p>
          </div>
        </div>
        {/* <!-- end of exp --> */}
        {/* <!-- exp  --> */}
        <div className="exp-tile">
          
          <div className="exp-img-container">
            <img src="./images/ui-design.jpg" alt=""/>
          </div>
          <div className="exp-info">
            <h3>
              <span>UI/UX Designer</span> ||
              SumatoSoft
            </h3>
            <p>Boston, USA (2020 -2022)</p>
          </div>
        </div>
        {/* <!-- end of exp --> */}
      </div>
  </div>

</section>





 );
}

export default Work;