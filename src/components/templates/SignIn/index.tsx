

import SignInForm from "components/organisms/SignInForm";
import Colors from "utils/styles/colors";
import { SignInBox, SignInContainer } from "./styles";

interface Props {
  onInputChange: (e: any) => void;
  onLogin: () => Promise<void>;
  onEnterKeyDown: (e: any) => void;
}

function SignIn({
  onInputChange,
  onLogin,
  onEnterKeyDown
}: Props) {
  return (
    <>
      <SignInContainer>
        <SignInBox>
          <SignInForm
            onInputChange={onInputChange}
            onLogin={onLogin}
            onEnterKeyDown={onEnterKeyDown}
          />
        </SignInBox>
      </SignInContainer>
    </>
  );
}

export default SignIn;
