
import LoginForm from "components/organisms/LoginForm";
import { LoginLayout, LoginBox, LoginItem } from "./styles";


function LoginPage() {
  return (
    <>
      <LoginLayout>
        <LoginBox>
          <LoginItem>
            <LoginForm />
          </LoginItem>
        </LoginBox>
      </LoginLayout>
    </>
  );
}

export default LoginPage;
