import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NoPage from "./components/NoPage";
import JobList from "./components/JobList";
import ApplyNow from "./components/ApplyNow";
import Layout from "./components/Layout";
import JobDetails from "./components/JobDetails";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/joblist" element={<JobList />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/applynow/:id" element={<ApplyNow />} />
          <Route path="/jobdetails/:id" element={<JobDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
