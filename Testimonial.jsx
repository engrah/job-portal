/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  // Carousel settings using react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="container-xxl py-20 animate-fadeInUp animate-delay-[0.1s]">
      <div className="container">
        <h1 className="text-center text-3xl font-bold mb-10">
          Our Clients Say!!!
        </h1>
        <Slider {...settings} className="testimonial-carousel">
          {/* Testimonial Item 1 */}
          <div className="testimonial-item bg-light rounded p-6">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>
              "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam."
            </p>
            <div className="flex items-center mt-4">
              <img
                className="img-fluid flex-shrink-0 rounded-full w-12 h-12"
                src="/img/testimonial-1.jpg"
                alt="Client Testimonial 1"
              />
              <div className="pl-3">
                <h5 className="mb-1 font-semibold">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>

          {/* Testimonial Item 2 */}
          <div className="testimonial-item bg-light rounded p-6">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>
              "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam."
            </p>
            <div className="flex items-center mt-4">
              <img
                className="img-fluid flex-shrink-0 rounded-full w-12 h-12"
                src="/img/testimonial-2.jpg"
                alt="Client Testimonial 2"
              />
              <div className="pl-3">
                <h5 className="mb-1 font-semibold">Mustahin Abrar</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>

          {/* Testimonial Item 3 */}
          <div className="testimonial-item bg-light rounded p-6">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>
              "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam."
            </p>
            <div className="flex items-center mt-4">
              <img
                className="img-fluid flex-shrink-0 rounded-full w-12 h-12"
                src="/img/testimonial-3.jpg"
                alt="Client Testimonial 3"
              />
              <div className="pl-3">
                <h5 className="mb-1 font-semibold">Akhlasur Rahman</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>

          {/* Testimonial Item 4 */}
          <div className="testimonial-item bg-light rounded p-6">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>
              "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam."
            </p>
            <div className="flex items-center mt-4">
              <img
                className="img-fluid flex-shrink-0 rounded-full w-12 h-12"
                src="/img/testimonial-4.jpg"
                alt="Client Testimonial 4"
              />
              <div className="pl-3">
                <h5 className="mb-1 font-semibold">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
