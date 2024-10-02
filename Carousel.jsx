import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="container-fluid p-0">
      <Slider {...settings} className="relative">
        {/* Slide 1 */}
        <div className="relative">
          <img
            className="w-full h-screen object-cover"
            src="/img/carousel-1.jpg"
            alt="Carousel 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container">
              <div className="row justify-start">
                <div className="col-10 col-lg-8">
                  <h1 className="text-4xl lg:text-6xl text-white font-bold mb-4 animate__animated animate__slideInDown">
                    Find The Perfect Job That You Deserved
                  </h1>
                  <p className="text-lg text-white mb-4 animate__animated animate__fadeIn">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea elitr.
                  </p>
                  <div className="space-x-4">
                    <a
                      href="#"
                      className="btn bg-blue-600 text-white py-3 px-6 hover:bg-blue-700 transition duration-300 animate__animated animate__slideInLeft"
                    >
                      Search A Job
                    </a>
                    <a
                      href="#"
                      className="btn bg-gray-700 text-white py-3 px-6 hover:bg-gray-800 transition duration-300 animate__animated animate__slideInRight"
                    >
                      Find A Talent
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            className="w-full h-screen object-cover"
            src="/img/carousel-2.jpg"
            alt="Carousel 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container">
              <div className="row justify-start">
                <div className="col-10 col-lg-8">
                  <h1 className="text-4xl lg:text-6xl text-white font-bold mb-4 animate__animated animate__slideInDown">
                    Find The Best Startup Job That Fit You
                  </h1>
                  <p className="text-lg text-white mb-4 animate__animated animate__fadeIn">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea elitr.
                  </p>
                  <div className="space-x-4">
                    <a
                      href="#"
                      className="btn bg-blue-600 text-white py-3 px-6 hover:bg-blue-700 transition duration-300 animate__animated animate__slideInLeft"
                    >
                      Search A Job
                    </a>
                    <a
                      href="#"
                      className="btn bg-gray-700 text-white py-3 px-6 hover:bg-gray-800 transition duration-300 animate__animated animate__slideInRight"
                    >
                      Find A Talent
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
