import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/home";
import { Layout } from "../components/layout";
import { Aplication } from "../pages/application";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/application" element={<Aplication />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}