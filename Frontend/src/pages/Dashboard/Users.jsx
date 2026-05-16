import { Outlet ,Link} from "react-router-dom";
function Users() {
  return (
    <section className="py-4">
      <div className="d-flex justify-content-between mb-3">
        <h3>Users</h3>
        <Link to="add" className="btn btn-primary">
          Add New User
        </Link>
      </div>
      <Outlet />
    </section>
  );
}

export default Users;
