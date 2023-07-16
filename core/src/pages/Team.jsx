import "../card.css"
export default function Team() {
    return (
        <div className="container">
            <div className="boxspace"></div>
            <div className="row">
                <div className="col">
                    <div className="card-container">
                        <div className="image-container">
                            <img src="../images/gamedevperson1.png"></img>
                        </div>
                        <div className="card-title">
                            <h3>John Mcgeo</h3>
                        </div>
                        <div className="card-body">
                            <p>Experienced in the game dev industry for 15 years+ and is passionate in teaching students wishing to know more about the industry.
                                <br></br>
                                <br></br>
                                <br></br>
                                <b>Email:</b> jMcgeo@gamedevit.com
                                <br></br>
                                <b>Phone No:</b> 613-312-2354
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-container">
                        <div className="image-container">
                            <img src="../images/gamedevperson3.png"></img>
                        </div>
                        <div className="card-title">
                            <h3>Kelly Waterson</h3>
                        </div>
                        <div className="card-body">
                            <p>Has taught game dev art for the last 10 years and experienced in creating beautiful 3D game art.
                                <br></br>
                                <br></br>
                                <br></br>
                                <b>Email:</b> kWaterson@gamedevit.com
                                <br></br>
                                <b>Phone No:</b> 613-252-9821
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-container">
                        <div className="image-container">
                            <img src="../images/gamedevperson2.png"></img>
                        </div>
                        <div className="card-title">
                            <h3>Greg Kolio</h3>
                        </div>
                        <div className="card-body">
                            <p>Was previously teaching about finance and economics for 5 years but switched to game dev marketing out of passion.
                                <br></br>
                                <br></br>
                                <br></br>
                                <b>Email:</b> gKolio@gamedevit.com
                                <br></br>
                                <b>Phone No:</b> 613-090-1200
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}