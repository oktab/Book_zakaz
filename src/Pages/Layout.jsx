import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header.jsx';
import Location from '../Components/Loction/Location';
import Footer from '../Components/Footer/Footer';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
      <Location />
      <Footer />
    </main>
  </>
);

export default Layout;
