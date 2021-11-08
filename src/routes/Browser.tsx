import { BrowserRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useAuthentication } from "../context/AuthenticationContext";
import AuthenticatedSwitch from "./AuthenticatedSwitch";
import UnauthenticatedSwitch from "./UnauthenticatedSwitch";

export default function Browser() {
  const { isAuthenticated } = useAuthentication();
  return (
    <BrowserRouter>
      <Navigation />
      {isAuthenticated ? <AuthenticatedSwitch /> : <UnauthenticatedSwitch />}
      <Footer />
    </BrowserRouter>
  );
}
