import { Outlet ,Link } from "react-router-dom";
function Projects() {
  return (
    <> 
    <section className="py-4">
      <div className="d-flex justify-content-between mb-3">
        <h3>Projects</h3>
        <Link to="add" className="btn btn-primary">
          Add New Project
        </Link>
      </div>
      <Outlet />
    </section>
    </>
  );
}

export default Projects;
