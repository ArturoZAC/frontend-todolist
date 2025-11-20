import { Outlet } from "react-router";

export const TodoLayout = () => {
  return (
    <div className="bg-red-500">
      <h2>Probando desde el layout</h2>

      <Outlet />
    </div>
  );
};
