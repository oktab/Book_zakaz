import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header.jsx';       // если вынесешь header в отдельный компонент
import Location from '../Components/Loction/Location';
import Footer from '../Components/Footer/Footer';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />  {/* сюда React Router подставит твои страницы */}
      <Location />
      <Footer />
    </main>
  </>
);

export default Layout;
