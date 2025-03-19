import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import head from './components/head'
// import HeaderName from './components/HeaderName';
// import UserName from './components/UserName';
// import Budget from './components/Budget';
// import Filter from './components/Filter';
import Layout from './components/Layout';

import "./App.css";


createRoot(document.getElementById('root')).render(
  <>

    <Layout />

  </>,
) 
