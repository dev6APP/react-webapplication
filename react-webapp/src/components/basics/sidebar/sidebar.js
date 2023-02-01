import { NavLink } from "react-router-dom";

export default function Sidebar(props){
    return (
        <div className="sidebar">
            {props.isOpen
            ? <div className="sidebarOpenClose" onClick={props.openNav}><i className="fa-solid fa-xmark"></i></div>
            : <div className="sidebarOpenClose" onClick={props.openNav}><i className="fa-solid fa-chevron-right"></i></div>}
            <h1>Jonas Wouters</h1>
            <div className="sidebarItems">
                <NavLink onClick={props.openNav} to="/"><i className="fa-solid fa-home"></i><span>Home</span></NavLink>
                <NavLink onClick={props.openNav} to="/farms"><i className="fa-solid fa-tractor"></i><span>Farms</span></NavLink>
                <NavLink onClick={props.openNav} to="/admin/adminFieldOwners"><i className="fa-solid fa-lock"></i><span>Admin: Field owners</span></NavLink>
                <NavLink onClick={props.openNav} to="/uploadPictures"><i className="fa-solid fa-camera"></i><span>Upload pictures</span></NavLink>
                <NavLink onClick={props.openNav} to="/account"><i className="fa-solid fa-user"></i><span>Account</span></NavLink>
            </div>
        </div>
    )
}