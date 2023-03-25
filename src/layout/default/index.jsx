import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Nav } from "../../components/nav";
import './default.scss'

export function DefaultLayout(){
    return(
        <div className="default">
        <Nav></Nav>
        <div className="default_content"> <Outlet></Outlet></div>  
        <Footer></Footer>
        </div>
    )
}