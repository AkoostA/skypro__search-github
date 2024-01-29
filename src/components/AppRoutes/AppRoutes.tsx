import Main from "../../pages/Main/Main";
import User from "../../pages/User/User";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";

function AppRoutes() {
  const PATH = "/skypro__search-github";

  return (
    <Routes>
      <Route path={PATH} element={<Main />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;