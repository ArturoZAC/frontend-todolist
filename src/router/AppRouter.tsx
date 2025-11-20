import { BrowserRouter, Route, Routes } from "react-router";
import { MainPage } from "../todos/pages/mainpage/MainPage";
import { TodoLayout } from "@/todos/layout/TodoLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        //*Rutas del modulo "todos""
        <Route element={<TodoLayout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
