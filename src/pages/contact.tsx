import Link from 'next/link';
import bg4 from '@/images/bg4.jpg';
import Header from '@/components/Header';

export default function Contact() {
  return (
    <div>
      <div>
        <Header
          className={'hero-area height-400 bg-img background-overlay'}
          pic={bg4}
        />
      </div>

      <section className="contact-area section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* <!-- Contact Form Area --> */}
            <div className="col-12 col-md-10 col-lg-8">
              <div className="contact-form">
                <h5>Get in Touch</h5>
                {/* <!-- Contact Form --> */}
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="group">
                        <input type="text" name="name" id="name" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Enter your name</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="group">
                        <input type="email" name="email" id="email" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Enter your email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="group">
                        <textarea
                          name="message"
                          id="message"
                          required
                        ></textarea>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Enter your message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn world-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="map-area">
        <div id="googleMap" className="googleMap"></div>
      </div> */}
    </div>
  );
}
