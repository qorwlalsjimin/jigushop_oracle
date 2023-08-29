import './App.css';
import Home from './pages/Home/Home';
import ItemList from './pages/ItemList/ItemList';
import Board from './pages/Board/Board';
import BoardDetail from './pages/Board/BoardDetail';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import JoinPage from './pages/JoinPage/JoinPage';
import Cart from './pages/Cart/Cart';
import AdminIndex from './pages/Admin/AdminIndex';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminJoin from './pages/Admin/AdminJoin';
import AdminItem from './pages/Admin/AdminItem';
import AdminChart from './pages/Admin/AdminChart';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import SearchList from './pages/ItemList/SearchList';
import MyPage from './pages/MyPage/MyPage';
import Order from './pages/Order/Order';
import BoardWrite from './pages/Board/BoardWrite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Home />} />

        {/* 관리자 */}
        <Route path="/admin" element={<AdminIndex/>} />
        <Route path="/admin_login" element={<AdminLogin/>} />
        <Route path="/admin_join" element={<AdminJoin/>} />
        <Route path="/admin_form" element={<AdminItem/>} />
        <Route path="/admin_chart" element={<AdminChart/>} />

        {/* 상품 목록 */}
        <Route path="/item_list" element={<ItemList />} />
        <Route path="/board" element={<Board />} />

        {/* 상품 상세 */}
        <Route path="/item/:itemId" element={<ItemDetail />} />

        {/* 상품 검색 */}
        <Route path="/search/:keyword" element={<SearchList />} />

        {/* 로그인, 회원가입 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />

        {/* 장바구니 */}
        <Route path="/cart" element={<Cart />} />

        {/* 마이페이지 */}
        <Route path="/mypage" element={<MyPage />} />

        {/* 주문페이지 */}
        <Route path="/order" element={<Order />} />

        {/* 게시판 */}
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/board/write" element={<BoardWrite />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
