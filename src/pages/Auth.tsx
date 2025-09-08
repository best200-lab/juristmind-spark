import { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    // redirect to frontend's login during development
    window.location.href = "http://localhost:8080/";
  }, []);

  return null;
};

export default Auth;
