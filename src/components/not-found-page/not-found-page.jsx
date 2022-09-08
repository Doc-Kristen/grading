import { AppRoute } from "helps/const";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <main>
    <h1>404 Not Found</h1>
    <p><Link to={AppRoute.Home}>Go to main page</Link></p>
  </main>
);

export default NotFoundPage;
