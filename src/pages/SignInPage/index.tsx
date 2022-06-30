import SignIn from "components/templates/SignIn";
import useAuth from "hooks/useAuth"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SignInPage() {
  const {
    handleEnterKeyDown,
    handleInputChange,
    handleLogin,
    checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <SignIn
      onEnterKeyDown={handleEnterKeyDown}
      onInputChange={handleInputChange}
      onLogin={handleLogin}
    />
  )
};
