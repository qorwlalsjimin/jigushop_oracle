import { Row, Col } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import MyPageNav from "../../components/MyPage/MyPageNav";
import Nav from "../../components/Nav/Nav";

export default function MyPage() {
    return (
        <>
            <Nav />
            <MyPageNav/>
            <Footer/>
        </>
    )
}