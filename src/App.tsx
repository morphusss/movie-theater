import { HashRouter as Router, Route, Routes } from "react-router"
import { Home } from "./pages/home"
//import { notFoundPage } from "./pages/notFound"

function App() {

    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="*" element={<notFoundPage/>}/>  -- Need to fix this, cause this always have error */}
            </Routes>
        </Router>
        </>
    )
}

export default App