import { Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar(){
    return (
        <nav className="nav">
        <Link to="/" className="site-title"><h1>Game DevIT</h1></Link>
        <ul>
            <CustomLink to="/Home/">Home</CustomLink>
            <CustomLink to="/Courses/">Courses</CustomLink>
            <CustomLink to="/Team/">Team</CustomLink>
            <CustomLink to="/Contacts/">Contacts</CustomLink>
            <CustomLink to="/Groups/">Groups</CustomLink>
            <CustomLink to="/Register/">Register</CustomLink>
            <CustomLink to="/StuResources/">Student Resources</CustomLink>
        </ul>
        </nav>
      
    )    
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}