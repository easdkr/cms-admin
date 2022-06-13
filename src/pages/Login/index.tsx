
import styled, { createGlobalStyle } from "styled-components";
import Login from '../../components/Templetes/Login';

const GlobalStyle = createGlobalStyle`
    #root,
    html,
    body {
        width: 100%;
        height: 100%;
    }
`
const LoginLayout =  styled.div`
    background: #303030;
    color: white;
    
    width: 100%;
    height: 100%;
`
const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: 100%;
    height: 100%;
`

const LoginItem = styled.div`
    width: 300px;
    margin: auto;
    background: #282c32;
    padding: 25px 40px 25px 40px;
    border-radius: 15px;
    transition: all 0.3s;
`
function App() {
  return (
    <>
    <GlobalStyle/>
    <LoginLayout>
      <LoginBox>
        <LoginItem>
          <Login/>
        </LoginItem>
      </LoginBox>
    </LoginLayout>
    </>
  );
}

export default App;
