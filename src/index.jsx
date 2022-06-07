import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'//pour gérer le routing des pages

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/responsive.css';
import DynamicStyle from './styles/DynamicStyle'//composant JS pour le CSS dynamique

import { ThemeProvider, SurveyProvider, EmailProvider } from './utils/context/context';

/* composants */
//rque : si le nom du fichier est index.jsx on l'importe en indiquant que le nom du dossier ou il se situe
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';
import Freelance from './pages/Freelance/Freelance';
import Freelance2 from './pages/Freelance/Freelance2';//exemple de composant class
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <SurveyProvider>
                    <DynamicStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="survey/:questionNumber" element={<Survey />} />
                        <Route path="results" element={<Results />} />
                        <Route path="freelances" element={<Freelances />} />
                        <Route path="freelance/:id" element={<Freelance />} />
                        <Route path="freelance2/:id" render={(props) => <Freelance2 {...props} />} element={<Freelance2 />} />
                        <Route path='*' element={<Error />} /> {/* gère les pages 404 */}
                    </Routes>
                    <EmailProvider>
                        <Footer />
                    </EmailProvider>
                </SurveyProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
