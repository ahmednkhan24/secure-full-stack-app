import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { oktaAuth, authState } = useOktaAuth();

  if (authState.isPending) return null;

  const logout = async () => oktaAuth.signOut();

  return (
    <div>
      <h1>Home Page</h1>
      {authState.isAuthenticated ? (
        <button type="button" className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      ) : (
        <h2>You are not logged in</h2>
      )}
    </div>
  );
};

export default Home;
