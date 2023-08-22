import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SearchItems from "../../components/ItemList/SearchItems";
import Nav from "../../components/Nav/Nav";

export default function SearchList() {
    const {keyword} = useParams();
    console.log(keyword);
    return (
        <>
            <Nav />
            <SearchItems keyword={keyword} />
            <Footer/>
        </>
    )
}