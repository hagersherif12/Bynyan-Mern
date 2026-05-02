import styles from "./Sidebar.module.css"
function Sidebar() {
    const links = [
        {
            icon: "fa-chart-column ",
            tittle: "Status"
        },
        {
            icon: " fa-people-group ",
            tittle: "Users Mangement"
        },
        {
            icon: "fa-building",
            tittle: "Projects Mangement"
        },

        {
            icon: "fa-building",
            tittle: "Developers Mangement"
        },
        {
            icon: " fa-earth-asia",
            tittle: "CMS"
        },
        {
            icon: "fa-message",
            tittle: "Live Chat "
        },
    ];
    return (
        <aside className={`min-vh-100 py-4 ${styles.sidestyle}`}>
            <div className="px-3 mb-2 fs-4 fw-semibold">Dashboard</div>
            <nav>
               {links.map((item,idx)=>(
                 <div className={`${styles.navIcon} align-items-center gap-2 d-flex p-3`} key={idx}>
                    <i className={`fa-solid ${item.icon} fs-3 `}></i>
                    <span className={styles.tittle}>{item.tittle}</span>
                </div>
               ))}
            </nav>

        </aside>
    )
}
export default Sidebar; 