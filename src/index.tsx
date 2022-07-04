import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { darktheme, GlobalStyle } from 'styles';
import { RecoilRoot } from 'recoil';
import Main from 'pages/Main';
import { ThemeProvider } from '@mui/material/styles';
import SignInPage from 'pages/SignInPage';
import { AxiosInterceptor } from 'services/AxiosInterceptor';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <AxiosInterceptor>
            <RecoilRoot>
                <ThemeProvider theme={darktheme}>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/signin" 
                            element={<SignInPage />} />
                        <Route path="*" element={<Main />} />
                    </Routes>
                </ThemeProvider>
            </RecoilRoot>
        </AxiosInterceptor>
    </BrowserRouter>,
);

reportWebVitals();
