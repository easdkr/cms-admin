

import SignInForm from "components/organisms/SignInForm";
import Colors from "utils/styles/colors";
import { SignInBox, SignInContainer } from "./styles";

interface Props {
  handleInputChange: (e: any) => void;
  handleLogin: () => Promise<void>;
  handleEnterKeyDown: (e: any) => void;
}

function SignIn({
  handleInputChange,
  handleLogin,
  handleEnterKeyDown
}: Props) {
  return (
    <>
      <SignInContainer>
        <SignInBox>
          <SignInForm
            handleInputChange={handleInputChange}
            handleLogin={handleLogin}
            handleEnterKeyDown={handleEnterKeyDown}
          />
        </SignInBox>
      </SignInContainer>
    </>
  );
}

export default SignIn;
