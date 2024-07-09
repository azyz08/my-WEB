import { Link, Route, Routes } from "react-router-dom"
import "./style.scss"
import Abduxabir from "../../pages/Abduxabir"
import Azizbek from "../../pages/Azizbek"
import Jamshid from "../../pages/Jamshid"

export default function Navbar() {
    return (
        <div>
            <div className="nav">
                <Link to={"/"}><p>Abduxabir</p></Link>
                <Link to={"/azizbek"}><p>Azizbek</p></Link>
                <Link to={"/jamshid"}><p>Jamshid</p></Link>
            </div>
            <Routes>
                <Route path="/" element={<Abduxabir />} />
                <Route path="/azizbek" element={<Azizbek />} />
                <Route path="/jamshid" element={<Jamshid />} />
            </Routes>
        </div>
    )
}