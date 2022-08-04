import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../style/globalStyles";
import LoginPage from "./loginPage/LoginPage";
import Registration from "./registration/Registration";
import Habits from "./habits/Habits";

export default function App() {
  return (
    <>
      <GlobalStyle />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/habitos" element={<Habits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
