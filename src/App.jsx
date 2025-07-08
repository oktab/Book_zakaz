import './i18n.js';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import News from './Pages/News/News.jsx';
import NewFull from './Pages/News/NewFull.jsx';
import Books from './Pages/Book/Books.jsx';
import Layout from './Pages/Layout.jsx';
import Rahbariat from './Pages/Rahbariyat/Rahbariat.jsx';
import Akm from './Pages/AKM/Akm.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/info/:id" element={<NewFull />} />
        <Route path="/books" element={<Books />} />
        <Route path="/managment" element={<Rahbariat />} />
        <Route path="/akm" element={<Akm />} />
      </Route>
    </Routes>
  );
}

export default App;
