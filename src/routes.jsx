import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";
import PageBase from "./pages/PageBase";

function AppRoutes(){
 return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageBase/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
                <Route path="/projetos" element={<Projetos/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                <Route path="*" element={<Page404/>}></Route>    
            </Route>
        </Routes>
    </BrowserRouter>
 )
}
export default AppRoutes