import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/pages/Mypage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
