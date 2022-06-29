import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles';
import { RecoilRoot } from 'recoil';
import Main from 'pages/Main';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInPage from 'pages/SignInPage';
import { AxiosInterceptor } from 'services/AxiosInterceptor';
import Header from 'components/organisms/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
const baseTheme = createTheme()
const darktheme = createTheme({
  palette: {
    mode: 'dark',
  }
})

root.render(
  <BrowserRouter>
    <AxiosInterceptor>
      <RecoilRoot>
        <ThemeProvider theme={darktheme}>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path='*' element={<Main />} />
          </Routes>
        </ThemeProvider>
      </RecoilRoot>
    </AxiosInterceptor>
  </BrowserRouter>
);

reportWebVitals();
