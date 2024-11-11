import { Route, Routes } from "react-router-dom"
import { pagesData } from "./pagesData"

const Router = () => {
    return <Routes>
        {pagesData.map(({ path, title, element }) => {
            return <Route key={title} path={`/${path}`} element={element} />
        })}
    </Routes>
}

export default Router
