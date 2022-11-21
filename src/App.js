import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import EditPage from "./Pages/EditPage";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import New from "./Pages/New";
import SignInPage from "./Pages/SignInPage";
import WelcomeScreen from "./Pages/WelcomeScreen";
import GlobalStyle from "./Resources/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignInPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="new/:inout" element={<New />} />
            <Route path="edit/:idinout" element={<EditPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
