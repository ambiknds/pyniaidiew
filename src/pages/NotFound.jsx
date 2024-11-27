import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-between p-32 m-32">
      <p className="m-2">The page you are looking does not exist.</p>
      <Link
        to="/"
        className="bg-gray-900 text-white border-black rounded-xl shadow p-2 m-2 "
      >
        Go back to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
