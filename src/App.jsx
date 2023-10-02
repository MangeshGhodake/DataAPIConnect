import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import routes from "@/routes";
import { useAuth } from "@/auth-context/auth.context";
function App() {
  let { user } = useAuth();
  const getRoutes = (allRoutes) =>
    allRoutes.map(({ route, element, authenticated }, key) => {
      if (route) {
        if (authenticated) {
          if (!user || !user.token || user.token === "") {
            return <Route path="*" element={<Navigate to="/home" replace />} />;
          }
          // return <AuthRoute path={route} element={element} key={key} />;
        }
        return <Route exact path={route} element={element} key={key} />;
      }

      return null;
    });
  return (
    <>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
