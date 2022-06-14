
import Login from "components/organisms/Login";
import { LoginLayout, LoginBox, LoginItem } from "./styles";


function LoginPage() {
  return (
    <>
      <LoginLayout>
        <LoginBox>
          <LoginItem>
            <Login />
          </LoginItem>
        </LoginBox>
      </LoginLayout>
    </>
  );
}

export default LoginPage;
