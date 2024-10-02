const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-400 footer pt-10 mt-20 animate-fadeIn">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Section */}
          <div>
            <h5 className="text-white mb-4">Company</h5>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              About Us
            </a>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              Contact Us
            </a>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              Our Services
            </a>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              Privacy Policy
            </a>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              Terms & Conditions
            </a>
          </div>

          {/* Quick Links Section */}
          <div>
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              About Us
            </a>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              Contact Us
            </a>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              Our Services
            </a>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              Privacy Policy
            </a>
            <a className="block text-gray-400 hover:text-white mb-2" href="#">
              Terms & Conditions
            </a>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-white mb-4">Contact</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt mr-2" />
              IT Incubator, CUET
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt mr-2" />
              +8801607728096
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope mr-2" />
              engakhlasur86@gmail.com
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-youtube" />
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>Sign up for our newsletter to get the latest job updates.</p>
            <div className="relative max-w-md">
              <input
                className="form-control bg-transparent border border-gray-400 w-full py-3 px-4 text-white"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white py-2 px-4 hover:bg-blue-600"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container py-6 border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center md:text-left text-gray-400">
            <p>© 2024 JOB PORTAL. All Rights Reserved.</p>
            <p>Designed by MD AKHLASUR RAHMAN</p>
          </div>
          <div className="text-center md:text-right text-gray-400">
            <a href="#" className="hover:text-white ml-4">
              Home
            </a>
            <a href="#" className="hover:text-white ml-4">
              Cookies
            </a>
            <a href="#" className="hover:text-white ml-4">
              Help
            </a>
            <a href="#" className="hover:text-white ml-4">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
