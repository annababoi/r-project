import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {LoginPage, RegisterPage} from "./pages";
import {CarPage} from "./pages/CarPage/CarPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/login'}/>}/>
                  <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/cars'} element={<CarPage/>}/>
            </Route>
        </Routes>
    );
}

export {App};
