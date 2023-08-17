import './App.css';
import Home from './pages/Home/Home';
import ItemList from './pages/ItemList/ItemList';
import Board from './pages/Board/Board';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import JoinPage from './pages/JoinPage/JoinPage';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Home />} />

        {/* 상품 목록 */}
        <Route path="/item_list" element={<ItemList />} />
        <Route path="/board" element={<Board />} />

        {/* 로그인, 회원가입 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />

        {/* 장바구니 */}
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
