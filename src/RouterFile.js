import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Form_Page1 from "./Form_Page1";
const RouterFile=()=>{
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="form_page1" element={<Form_Page1/>} />
</Routes>
</BrowserRouter>
    );
}
export default RouterFile;