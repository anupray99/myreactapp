import { useState, useEffect } from "react";
import axios from "axios";

function Student() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios({
            url: 'http://localhost:3001',
            method: 'POST',
            data: { name, roll }
        }).then(res => setStudents(res.data)).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        axios({
            url: 'http://localhost:3001',
            method: 'GET'
        }).then(res => setStudents(res.data)).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <form>
                Name: <input
                    type="Text"
                    onChange={event => setName(event.target.value)} /><br></br>
                Roll: <input
                    type="Text"
                    onChange={event => setRoll(event.target.value)} /><br></br>
                <br></br>
                <button onClick={submitHandler}>Submit</button>
            </form>

            <br></br><br></br>
            {students.map(student => <ul>
                <li>{student.roll} : {student.name}</li>
            </ul>)}
        </div>
    )
}
export default Student