import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../style/globalStyles";
import LoginPage from "./loginPage/LoginPage";
import Registration from "./registration/Registration";
import Habits from "./habits/Habits";
import Today from "./today/Today";
import History from "./history/History";
import PrivatePage from "./privatePage/PrivatePage";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/hoje" element={<PrivatePage><Today /></PrivatePage>}/>
          <Route path="/habitos" element={<PrivatePage><Habits /></PrivatePage>}/>
          <Route path="/historico" element={<PrivatePage><History /></PrivatePage>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
