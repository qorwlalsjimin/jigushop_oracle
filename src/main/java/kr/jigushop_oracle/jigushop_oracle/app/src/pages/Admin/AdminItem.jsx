import { useLocation } from "react-router-dom";
import AdminAddForm from "../../components/Admin/AdminAddForm";
import AdminEditForm from "../../components/Admin/AdminEditForm";
import AdminNav from "../../components/Admin/AdminNav";

export default function AdminItem() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const classValue = queryParams.get('class');
    const idValue = queryParams.get('id');
    console.log(classValue);

    return (
        <>
            <AdminNav />
            {classValue === 'add' ?
                <AdminAddForm /> : <AdminEditForm idProps={idValue} />
            }
                
        </>
    )
}