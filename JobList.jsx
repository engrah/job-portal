import { useEffect } from "react";
import useStore from "../useStore";
import jobLogo from "/img/com-logo-1.jpg";
import { useNavigate } from "react-router-dom";

const JobList = () => {
  const { data, fetchData } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleApplyClick = (job) => {
    navigate(`/applynow/${job.id}`);
  };

  const handleDetailsClick = (job) => {
    navigate(`/jobdetails/${job.id}`); // Navigate to the job details page with job id
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 align-middle flex">Job Data</h1>
      {data.map((item, index) => (
        <div
          key={index}
          className="job-item p-8 mb-8 bg-slate-300 shadow-md rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center col-span-1 md:col-span-2">
              <img
                className="flex-shrink-0 w-20 h-20 border rounded"
                src={jobLogo}
                alt={`${item.title} logo`}
              />
              <div className="text-start pl-4">
                <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                <p className="truncate text-gray-600 mb-1">{item.company}</p>
                <span className="truncate block text-gray-600 mb-1">
                  {item.category}
                </span>
                <span className="truncate block text-gray-600 mb-1">
                  Salary: {item.salary}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-center col-span-1 md:col-span-1">
              <div className="flex mb-3">
                <button
                  className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                  onClick={() => handleApplyClick(item)}
                >
                  Apply Now
                </button>
              </div>
              <div className="flex mb-3">
                <button
                  className="bg-yellow-500 text-white rounded px-4 py-2 hover:bg-yellow-600"
                  onClick={() => handleDetailsClick(item)}
                >
                  Job Details
                </button>
              </div>
              <small className="truncate text-gray-500">
                <i className="far fa-calendar-alt text-primary mr-2"></i>
                Deadline: {item.deadline}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
