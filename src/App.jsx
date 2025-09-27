import "./i18n.js";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import News from "./Pages/News/News.jsx";
import NewFull from "./Pages/News/NewFull.jsx";
import Layout from "./Pages/Layout.jsx";
import Rahbariat from "./Pages/Rahbariyat/Rahbariat.jsx";
import ModernLogin from "./Components/registor/Registor.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Akm from './Pages/AKM/Akm.jsx';
import BooksSection from './Pages/Book/BooksSection.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/info/:id" element={<NewFull />} />
          <Route path="/books" element={<BooksSection />} />
          <Route path="/managment" element={<Rahbariat />} />
          <Route path="/akm" element={<Akm />} />
        </Route>
        <Route path="/signin" element={<ModernLogin />} />
      </Routes >
    </>
  );
}

export default App;
