import { Link } from 'react-router-dom';

import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <Card>
   <div className="about-page">
   <h1>About This Project</h1>
      <p>This is a react app to leave feedback for a project or services</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to="/">Go to Home Page</Link>
      </p>
    </div>
    </Card>
  );
}

export default AboutPage;