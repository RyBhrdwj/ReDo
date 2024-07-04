import React from "react";
import { useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";

  return (
    <div>
      <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
      <form>
        {isSignUp && (
          <div>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
          </div>
        )}
        <div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>
    </div>
  );
};

export default AuthPage;
