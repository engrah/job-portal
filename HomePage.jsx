import Carousel from "./Carousel";
import JobList from "./JobList";
import Search from "./Search";
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Search />
      <JobList />
      <Testimonial />
    </div>
  );
};

export default HomePage;
