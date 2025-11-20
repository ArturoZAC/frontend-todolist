import { BrowserRouter, Route, Routes } from "react-router";
import { MainPage } from "../todos/pages/mainpage/MainPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        //*Rutas del modulo "todos""
        <Route index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
