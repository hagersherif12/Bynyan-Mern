import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css"
function Sidebar() {
    const links = [
        {
            icon: "fa-chart-column ",
            tittle: "Status",
            path:"/"
        },
        {
            icon: " fa-people-group ",
            tittle: "Users Mangement",
            path:"/users"
        },
        {
            icon: "fa-building",
            tittle: "Projects Mangement",
            path:"/projects"
        },

        {
            icon: "fa-building",
            tittle: "Developers Mangement",
            path:"/"
        },
        {
            icon: " fa-earth-asia",
            tittle: "CMS"
        },
        {
            icon: "fa-message",
            tittle: "Live Chat ",
            path:"/"
        },
    ];
    return (
        <aside className={`min-vh-100 py-4 ${styles.sidestyle}`}>
            <div className="px-3 mb-2 fs-4 fw-semibold">Dashboard</div>
            <nav>
               {links.map((item,idx)=>(
                 <NavLink
                 to={item.path}
                 className={`${styles.navIcon} align-items-center gap-2 d-flex p-3`} key={idx}>
                    <i className={`fa-solid ${item.icon} fs-3 `}></i>
                    <span className={styles.tittle}>{item.tittle}</span>
                </NavLink>
               ))}
            </nav>

        </aside>
    )
}
export default Sidebar; 