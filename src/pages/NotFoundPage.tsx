import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFoundPage;
