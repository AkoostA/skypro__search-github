import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "../AppRoutes/AppRoutes";
import { sessionStorageUpdate } from "../../store/reducers/reducers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionStorageUpdate());
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
