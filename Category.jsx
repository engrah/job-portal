import "./Category.css";

const Category = () => {
  return (
    <div className="category-container">
      <h1 className="category-title">Explore By Category</h1>
      <div className="category-grid">
        <div className="category-item">
          <i className="icon fa fa-mail-bulk"></i>
          <h6>Marketing</h6>
          <p>123 Vacancy</p>
        </div>
        <div className="category-item">
          <i className="icon fa fa-headset"></i>
          <h6>Customer Service</h6>
          <p>123 Vacancy</p>
        </div>
        <div className="category-item">
          <i className="icon fa fa-user-tie"></i>
          <h6>Human Resource</h6>
          <p>123 Vacancy</p>
        </div>
        <div className="category-item">
          <i className="icon fa fa-tasks"></i>
          <h6>Project Management</h6>
          <p>123 Vacancy</p>
        </div>
        <div className="category-item">
          <i className="icon fa fa-chart-line"></i>
          <h6>Business Development</h6>
          <p>123 Vacancy</p>
        </div>
        <div className="category-item">
          <i className="icon fa fa-hands-helping"></i>
          <h6>Sales & Communication</h6>
          <p>123 Vacancy</p>
        </div>
        <div className="category-item">
          <i className="icon fa fa-book-reader"></i>
          <h6>Teaching & Education</h6>
          <p>123 Vacancy</p>
        </div>
        <div className="category-item">
          <i className="icon fa fa-drafting-compass"></i>
          <h6>Design & Creative</h6>
          <p>123 Vacancy</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
