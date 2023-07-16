import { useTranslation } from "react-i18next"

import { Link, useMatch, useResolvedPath } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
    const { t, i18n } = useTranslation();

    return (
        <nav className="nav">
            <Link to="/" className="site-title"><h1>Game DevIT</h1></Link>
            <ul>
                <CustomLink to="/Home/">{t("Navbar.Home")}</CustomLink>
                <CustomLink to="/Courses/">{t("Navbar.Courses")}</CustomLink>
                <CustomLink to="/Team/">{t("Navbar.Team")}</CustomLink>
                <CustomLink to="/Contacts/">{t("Navbar.Contacts")}</CustomLink>
                <CustomLink to="/Groups/">{t("Navbar.Groups")}</CustomLink>
                <CustomLink to="/Register/">{t("Navbar.Register")}</CustomLink>
                <CustomLink to="/StuResources/">{t("Navbar.StudentRes")}</CustomLink>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={i18n.language}
                    menuVariant="dark"
                >
                    <NavDropdown.Item onClick={() => i18n.changeLanguage('En')}>English</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => i18n.changeLanguage('Fr')}>French</NavDropdown.Item>
                </NavDropdown>
            </ul>

        </nav>


    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}