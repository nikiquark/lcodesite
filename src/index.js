import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Team from './pages/Team';
import About from './pages/About';
import NoPage from './pages/NoPage';
import './i18n.js'
import Theory from './pages/Theory';
import Partnership from './pages/Partnership';
import Publications from './pages/Publications';
export default function App(){
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element = {<About/>}/>
          <Route path="/team" element = {<Team/>}/>
          <Route path="/theory" element = {<Theory/>}/>
          <Route path="/partnership" element = {<Partnership/>}/>
          <Route path="/publications" element = {<Publications/>}/>
          <Route path="*" element = {<NoPage/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
