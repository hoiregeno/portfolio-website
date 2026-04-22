import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="p-10">
      <Outlet />
    </main>
  );
}

export default Main;
