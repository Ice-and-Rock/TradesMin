import useFetchUserData from "../../hooks/useFetchUserData.js";
import UserData from "./UserData.jsx";

const UserPage = ( user ) => {
  // const userId = userData.auth_user_id
  const { userData: fetchedUser, isPending, error } = useFetchUserData();
  console.log("fetchedUser OBJECT:", fetchedUser);
  console.log("UserData PROPS:", user);

  return (
    <div>
      {error && <div className="text-red-600"> {error} </div>}
      {isPending && (
        <div className="text-pink-500 font-bold m-2 p-2">
          
          Waiting for data...
        </div>
      )}
      {fetchedUser && (
        <div>
          <div className="flex flex-col p-1 min-w-auto">
            <UserData fetchedUser={fetchedUser} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage
