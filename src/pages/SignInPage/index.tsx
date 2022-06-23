import SignIn from "components/templates/SignIn";
import useAuth from "hooks/useAuth"

export default function SignInPage() {
  const { handleEnterKeyDown, handleInputChange, handleLogin } = useAuth();
  return (
    <>
      <SignIn
        handleEnterKeyDown={handleEnterKeyDown}
        handleInputChange={handleInputChange}
        handleLogin={handleLogin}
      />
    </>
  )
};
