import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutBtn from "./LogoutBtn";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold mb-2">Welcome to My Website: {user.name}</h2>
        <p className="text-lg mb-4">Your email address is: {user.email}</p>
        <LogoutBtn/>
        </div>
      </div>
    )
  );
};
export default Profile;
