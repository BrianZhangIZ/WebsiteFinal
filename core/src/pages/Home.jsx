import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="boxspace"></div>
            <div className="row">
                <div className="col">
                    <div className="box">
                        <img src="../images/gamedev.png"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="boxspace2"></div>
                    <div className="row">
                        <h1>EXPLORE THE GAMING DEVELOPMENT EXPERIENCE WITH US</h1>
                    </div>
                    <div className="boxspace2"></div>
                    <div className="row">
                        <div className="col">
                            <button onClick={() => navigate('/Courses/')}> View Courses </button>
                        </div>
                        <div className="col">
                        <button onClick={() => navigate('/Contacts/')}> Contact Us </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


