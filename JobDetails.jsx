import { useParams } from "react-router-dom";
import useStore from "../useStore";

const JobDetails = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const { data } = useStore();

  // Find the job with the matching id
  const job = data.find((job) => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{job.title}</h1>
      <div className="mb-4">
        <p className="text-lg mb-2">
          <strong>Company:</strong> {job.company}
        </p>
        <p className="text-lg mb-2">
          <strong>Category:</strong> {job.category}
        </p>
        <p className="text-lg mb-2">
          <strong>Salary:</strong> {job.salary}
        </p>
        <p className="text-lg mb-2">
          <strong>Deadline:</strong> {job.deadline}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-4">Job Description</h3>
        <p>{job.description}</p>
      </div>
      {job.responsibilities && (
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-4">Responsibilities</h3>
          <ul className="list-disc list-inside">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      )}
      {job.qualifications && (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Qualifications</h3>
          <ul className="list-disc list-inside">
            {job.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
