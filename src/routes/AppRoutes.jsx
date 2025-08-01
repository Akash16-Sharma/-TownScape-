import { Routes,Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgetPassword";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Feed from "../pages/Feed";

const AppRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;