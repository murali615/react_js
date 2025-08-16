function Footer() {
    return (
      <div className="bg-black">
        <div className="container p-2">
          <div className="row">
  
            <div className="col">
              <img className="mb-2" src="https://st.depositphotos.com/1004032/3530/i/950/depositphotos_35304677-stock-photo-information-technology-in-tag-cloud.jpg" width="150px" />
              <p className="text-white"><i className="bi bi-lightbulb-fill me-2"></i>Learn from industry experts</p>
            </div>
  
            <div className="col">
              <b className="text-white">Frontend Skills</b>
              <ul className="nav flex-column mb-1">
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-code-slash me-2"></i>HTML5</span></li>
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-palette me-2"></i>CSS3</span></li>
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-braces-asterisk me-2"></i>JavaScript</span></li>
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-react me-2"></i>React (Basics)</span></li>
              </ul>
            </div>
  
            <div className="col">
              <b className="text-white">Learning</b>
              <ul className="nav flex-column mb-1">
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-lightning-fill me-2"></i>React Projects</span></li>
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-stars me-2"></i>CSS Animations</span></li>
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-grid-1x2-fill me-2"></i>Flexbox & Grid</span></li>
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-phone-landscape me-2"></i>Responsive Design</span></li>
              </ul>
            </div>
  
            <div className="col">
              <b className="text-white">Placement Prep</b>
              <ul className="nav flex-column mb-1">
                <li className="nav-item"><a className="nav-link text-white" href="#"><i className="bi bi-diagram-3-fill me-2"></i>DSA Practice</a></li>
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-calculator-fill me-2"></i>Basic Aptitude</span></li>
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-file-earmark-person-fill me-2"></i>Resume Building</span></li>
                <li className="nav-item"><span className="nav-link text-white"><i className="bi bi-mic-fill me-2"></i>Mock Interviews</span></li>
              </ul>
            </div>
  
            <div className="col">
              <b className="text-white">Connect with Me</b>
              <ul className="nav flex-column mb-1">
                <li className="nav-item"><a className="nav-link text-white" href="#"><i className="bi bi-github me-2"></i>GitHub</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#"><i className="bi bi-linkedin me-2"></i>LinkedIn</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#"><i className="bi bi-globe me-2"></i>Portfolio</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#"><i className="bi bi-envelope me-2"></i>Email Me</a></li>
              </ul>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  
  export  default Footer;
  