import withAuth from '../auth/withAuth';
import Home from '../ui/pages/dashboard';

 function HomePage() {
  return <Home />;
}

export default withAuth(HomePage);
