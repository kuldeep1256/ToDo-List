import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutBtn = () => {
  const { logout } = useAuth0();

  return (
  
      <button className="bg-[#0C67A0] text-white font-bold py-2 px-4 rounded hover:bg-[#094D78] transition-colors" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  
    
  );
};

export default LogoutBtn;