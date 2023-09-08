import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
const RouterFile=()=>{
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}></Route>
</Routes>
</BrowserRouter>
    );
}
export default RouterFile;