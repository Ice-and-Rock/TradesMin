import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <Link
      to="/createproject"
      className="flex flex-row bg-gradient-to-t from-pink-500 to-pink-400 text-white py-2 px-4 m-4 rounded-full shadow-xl hover:bg-pink-700"
      style={{ textDecoration: "none", cursor: "pointer" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-7 h-6 pr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <span>New Project</span>
    </Link>
  );
};

export default CreateButton;
