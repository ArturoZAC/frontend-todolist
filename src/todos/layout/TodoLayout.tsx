import { Outlet } from "react-router";
import { MainContainer } from "../components/MainContainer";

export const TodoLayout = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen justify-center items-center">
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
};
