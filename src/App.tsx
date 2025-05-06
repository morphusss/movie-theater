import { HashRouter as Router, Route, Routes } from "react-router"
import { Home } from "./pages/home"
import { Games } from "./pages/games"
import { Developers } from "./pages/developers"
import { NotFoundPage } from "./pages/notFound"

function App() {

    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/developers" element={<Developers/>}/>
                <Route path="/profile" element={<NotFoundPage/>}/> -- Need to fix this, cause this always have error
            </Routes>
        </Router>
        </>
    )
}

export default App