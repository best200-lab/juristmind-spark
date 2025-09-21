import { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    // redirect to frontend's login during development
    window.location.href = "https://chat.juristmind.com/";
  }, []);

  return null;
};

export default Auth;
