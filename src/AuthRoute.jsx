import React from "react";
import { useAuth } from "@/auth-context/auth.context";
import { Route } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

export const AuthRoute = ({ element: ComponentToRender, ...rest }) => {
  // const navigate = useNavigate();
  let { user } = useAuth();
  if (!user || !user.token || user.token === "") {
    return <Navigate to="/home" replace />;
  }

  return <Route {...rest} />;
};
