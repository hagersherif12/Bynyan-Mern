import { Outlet,Link } from "react-router-dom";
function Developers() {
  return (
    <>
      <section className="py-4">
        <div className="d-flex justify-content-between mb-3">
          <h3>Developers</h3>
          <Link to="add" className="btn btn-primary">
            Add New Developer
          </Link>
        </div>
        <Outlet />
      </section>
    </>
  );
}

export default Developers;