import "./i18n.js";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import News from "./Pages/News/News.jsx";
import NewFull from "./Pages/News/NewFull.jsx";
import Books from "./Pages/Book/Books.jsx";
import Layout from "./Pages/Layout.jsx";
import Rahbariat from "./Pages/Rahbariyat/Rahbariat.jsx";
import ModernLogin from "./Components/registor/Registor.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Akm from './Pages/AKM/Akm.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/news" element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          } />
          <Route path="/news/info/:id" element={
            <ProtectedRoute>
              <NewFull />
            </ProtectedRoute>
          } />
          <Route path="/books" element={
            <ProtectedRoute>
              <Books />
            </ProtectedRoute>
          } />
          <Route path="/managment" element={
            <ProtectedRoute>
              <Rahbariat />
            </ProtectedRoute>
          } />
          <Route path="/akm" element={
            <ProtectedRoute>
              <Akm />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/signin" element={<ModernLogin />} />
      </Routes >
    </>
  );
}

export default App;
