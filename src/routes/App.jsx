import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout.jsx';
import Login from '../pages/Login.jsx';
import RecoveryPassword from '../containers/RecoveryPassword.jsx';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import Checkout from '../pages/Checkout.jsx';
import CreateAccount from '../pages/CreateAccount.jsx';
import MyAccount from '../pages/MyAccount.jsx';
import NewPassword from '../pages/NewPassword.jsx';
import Orders from '../pages/Orders.jsx';
import PasswordRecovery from '../pages/PasswordRecovery.jsx';
import SendEmail from '../pages/SendEmail.jsx';
import AppContext from '../context/appContext.js';
import useInitialState from '../Hooks/useInitialState.js';
import '../styles/global.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/recovery-password" element={<RecoveryPassword />} />
            <Route exact path="/Checkout" element={<Checkout />} />
            <Route exact path="/CreateAccount" element={<CreateAccount />} />
            <Route exact path="/MyAccount" element={<MyAccount />} />
            <Route exact path="/NewPassword" element={<NewPassword />} />
            <Route exact path="/Orders" element={<Orders />} />
            <Route exact path="/PasswordRecovery" element={<PasswordRecovery />} />
            <Route exact path="/SendEmail" element={<SendEmail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
