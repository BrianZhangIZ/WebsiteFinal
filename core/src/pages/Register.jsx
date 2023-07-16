import { useState, Component } from "react" 
import { useNavigate } from "react-router-dom"
import PopupAlert from "./PopupAlert";
import "../register.css"
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';

export default function Register(){
    const { reset } = useForm();
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('Game Dev 101');
    const [courseLevel, setCourseLevel] = useState('Beginner');
    const [courseTime, setCourseTime] = useState('9AM - 12AM');


    return (
        <div className="create">
            <h4>Register for Course</h4>
            <form>
                <label>Your Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Course Selected:</label>
                <select value={course} onChange={(e) => setCourse(e.target.value)}>
                    <option value="Game Dev 101">Game Dev 101</option>
                    <option value="Game Dev Marketing">Game Dev Marketing</option>
                    <option value="Game Dev Art Intro">Game Dev Art Intro</option>
                    <option value="Game Dev Backend Intro">Game Dev Backend Intro</option>
                    <option value="Game Dev Art Foundation">Game Dev Art Foundation</option>
                    <option value="Marketing Appeal">Marketing Appeal</option>
                    <option value="Game Dev Unity Language">Game Dev Unity Language</option>
                    <option value="Game Dev 3D Art">Game Dev 3D Art</option>
                    <option value="Game Industry Overview">Game Industry Overview</option>
                </select>
                <label>Course Level:</label>
                <select value={courseLevel} onChange={(e) => setCourseLevel(e.target.value)}>
                    <option value="Entry">Entry</option>
                    <option value="Mid">Mid</option>
                    <option value="Expert">Expert</option>
                </select>
                <label>Course Time:</label>
                <select value={courseTime} onChange={(e) => setCourseTime(e.target.value)}>
                    <option value="9AM - 12AM">9AM - 12AM</option>
                    <option value="1PM - 3PM">1PM - 3PM</option>
                    <option value="3PM - 6PM">3PM - 6PM</option>
                </select>
                <label>Your Email:</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Your Phone No:</label>
                <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />


                {name.length<=0||phone.length<=0||email.length<=0?
                <button>Submit</button>:<PopupAlert/>}
                <br></br>
                <br></br>
                
                <button onClick={() => navigate('/Register/')}>Reset</button>

                <br></br>
                <br></br>
                <p><b>Your Name:</b> { name }</p>
                <p><b>Your Email:</b> { email }</p>
                <p><b>Your Phone No:</b> { phone }</p>
                <br></br>
                <p><b>Selected Course Name:</b> { course }</p>
                <p><b>Selected Course Level:</b> { courseLevel }</p>
                <p><b>Selected Course Time:</b> { courseTime }</p>
            </form>
        </div>
    )
}
