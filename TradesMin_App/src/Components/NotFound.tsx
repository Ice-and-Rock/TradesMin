import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-blue-100 rounded-2xl m-4">
      <div className="flex flex-col p-6 text-gray-800">
        <div className="text-2xl text-pink-600">Sorry!</div>
        <p>That page can't be found</p>
        <Link className="font-bold text-pink-600" to="/">Back to the homepage...</Link>
      </div>
    </div>
  );
};

export default NotFound;
