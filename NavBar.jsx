import { Link } from "react-router-dom";

const Navbar = () => {
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      {/* All Job List */}
      <li>
        <Link to={"/joblist"}> Jobs </Link>
      </li>

      <li>
        <Link to={"/signup"}>Signup</Link>
      </li>

      <li>
        <Link to="/applied-jobs">Applied Jobs</Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-cyan-400 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              CTG JOB PORTAL
            </h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        {/* Post A Job  */}
        <Link to={"/applynow"}> Submit Your CV </Link>
      </div>
    </nav>
  );
};

export default Navbar;
