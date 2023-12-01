const Body = () => {
    return (
      <div className="page-content">
    <div className="container">
      <div className="cover shadow-lg bg-white">
        <div className="cover-bg p-3 p-lg-4 text-white">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="avatar hover-effect bg-white shadow-sm p-1"><img src="images/melisa.jpeg" width={200} height={200} /></div>
            </div>
            <div className="col-lg-8 col-md-7 text-center text-md-start">
              <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay={0}>Melisa Geibby</h2>
              <p data-aos="fade-left" data-aos-delay={100}>Graphic Designer &amp; Web Developer</p>
              <div className="d-print-none" data-aos="fade-left" data-aos-delay={200}><a className="btn btn-light text-dark shadow-sm mt-1 me-1" href="right-resume.pdf" target="_blank">Download CV</a><a className="btn btn-success shadow-sm mt-1" href="#contact">Hire Me</a></div>
            </div>
          </div>
        </div>
        <div className="about-section pt-4 px-3 px-lg-4 mt-1">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h3 mb-3">About Me</h2>
              <p>Hello! I’m Melisa Geibby. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and Entrepreuner.</p>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="row mt-2">
                <div className="col-sm-4">
                  <div className="pb-1">Age</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">21</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Email</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">girothmelisa@gmail.com</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Phone</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">+0815-2779-7777</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Address</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">Manado, Sulawesi Utara, Indonesia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-print-none" />
        <hr className="d-print-none" />
        <div className="work-experience-section px-3 px-lg-4">
          <h2 className="h3 mb-4">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Frontend Developer <span className="text-muted h6"></span></div>
                <div className="text-muted text-small mb-2">August, 2023 - December, 2023</div>
                <div>Through the frontend, I can see the real results of your work immediately. Every display designed and implemented is a direct contribution to the project.</div>
              </div>
            </div>
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Entrepreuner <span className="text-muted h6"></span></div>
                <div className="text-muted text-small mb-2">January, 2023 - June, 2023</div>
                <div>I am fascinated by the creativity and innovation that can be realized through the world of entrepreneurship, seeing it as a place where ideas can develop into concrete solutions to challenges. Independence and freedom in making decisions are aspects that I really value, as well as the opportunity to continue to grow and develop leadership skills. I believe that entrepreneurship is not only about creating opportunities for oneself, but also making a positive contribution to society
  .</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-print-none" />
        <div className="page-break" />
        <div className="education-section px-3 px-lg-4 pb-4">
          <h2 className="h3 mb-4">Education</h2>
          <div className="timeline">
            <div className="timeline-card timeline-card-success card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1"> Computer Science <span className="text-muted h6">from Klabat University</span></div>
                <div className="text-muted text-small mb-2">2021 - Now </div>
                <div>My interest in enrolling in a computer faculty is often sparked by a combination of interest in technology, desire for professional growth, and awareness of the broad career opportunities in this field. The desire to continue learning and developing amidst rapid advances in the world of information technology.</div>
              </div>
            </div>
            <div className="timeline-card timeline-card-success card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1"> Multimedia <span className="text-muted h6">from SMK N1 Tumpaan</span></div>
                <div className="text-muted text-small mb-2">2017 - 2020</div>
                <div>The multimedia major at SMK involves developing skills in creating visual and audio content. Students learn graphic design, animation, and video editing using the latest software. They are trained to think creatively, collaborate over time, and produce innovative multimedia solutions. With a focus on technical and creative skills, graduates of this major are ready to contribute to industries that require integrated multimedia skills.
  </div>
              </div>
            </div>
            </div> 
          </div>
        </div>
        <hr className="d-print-none" />
        <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
          <h2 className="h3 text mb-3">Contact</h2>
          <div className="row">
            <div className="col-md-7 d-print-none">
              <div className="my-2"><form action="https://formspree.io/your@email.com" method="POST">
                  <div className="row">
                    <div className="col-6">
                      <input className="form-control" type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-6">
                      <input className="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail" required />
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <textarea className="form-control" style={{resize: 'none'}} id="message" name="message" rows={4} placeholder="Your Message" required defaultValue={""} />
                  </div>
                  <button className="btn btn-primary mt-2" type="submit">Send</button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="mt-2">
                <h3 className="h6">Address</h3>
                <div className="pb-2 text-secondary">Manado, Sulawesi Utara, Indonesia</div>
                <h3 className="h6">Phone</h3>
                <div className="pb-2 text-secondary">+0815-2779-7777</div>
                <h3 className="h6">Email</h3>
                <div className="pb-2 text-secondary">girothmelisa@gmail.com</div>
              </div>
            </div>
            <div className="col d-none d-print-block">
              <div className="mt-2">
                <div>
                  <div className="mb-2">
                    <div className="text-dark"><i className="fab fa-twitter mr-1" /><span>https://twitter.com/templateflip</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-dark"><i className="fab fa-facebook mr-1" /><span>https://www.facebook.com/templateflip</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-dark"><i className="fab fa-instagram mr-1" /><span>https://www.instagram.com/templateflip</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-dark"><i className="fab fa-github mr-1" /><span>https://github.com/templateflip</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  
    )
  }
  
  export default Body