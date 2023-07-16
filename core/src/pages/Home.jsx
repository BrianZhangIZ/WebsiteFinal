import { useNavigate } from "react-router-dom"
import i18n from "../i18next"
import { useTranslation } from "react-i18next"


export default function Home(){
    const { t } = useTranslation();
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
                        <h1>{t("Main.1")}</h1>
                    </div>
                    <div className="boxspace2"></div>
                    <div className="row">
                        <div className="col">
                            <button onClick={() => navigate('/Courses/')}> {t("Main.button1")} </button>
                        </div>
                        <div className="col">
                        <button onClick={() => navigate('/Contacts/')}> {t("Main.button2")} </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


