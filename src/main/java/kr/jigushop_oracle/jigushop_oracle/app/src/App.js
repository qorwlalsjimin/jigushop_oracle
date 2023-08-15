import './App.css';
import Home from './pages/Home/Home';
import ItemList from './pages/ItemList/ItemList';
import Board from './pages/Board/Board';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import JoinPage from './pages/JoinPage/JoinPage';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminJoin from './pages/Admin/AdminJoin';
import AdminItem from './pages/Admin/AdminItem';
import AdminChart from './pages/Admin/AdminChart';
import AdminItemList from './pages/Admin/AdminIndex';
import AdminIndex from './pages/Admin/AdminIndex';

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

        {/* 관리자 */}
        <Route path="/admin" element={<AdminIndex/>}/>
        <Route path="/admin_login" element={<AdminLogin/>}/>
        <Route path="/admin_join" element={<AdminJoin/>}/>
        <Route path="/add" element={<AdminItem/>}/>
        <Route path="/chart" element={<AdminChart/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
