import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import LoginRoutes from './pages/LoginRoutes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/pages/Mypage" element={<MyPage />} />
          <Route path="/pages/LoginRoutes" element={<LoginRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
