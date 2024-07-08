import { useState, useEffect, useContext } from "react";
import axios from "axios";
import MyContext from "./Context/Context";

function Student() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [value, setValue] = useContext(MyContext)
    let [isUpdateQuery, setisUpdateQuery] = useState(false);
    let [updateIndex, setupdateIndex] = useState(0);

    console.log(isUpdateQuery, '**************')
    const submitHandler = (e) => {
        e.preventDefault();
        if (!isUpdateQuery) {
            axios({
                url: 'http://localhost:3001',
                method: 'POST',
                data: { name, roll }
            }).then(res => {
                setStudents(res.data);
                setValue(name);
                setName('');
                setRoll('')
            }).catch(err => {
                console.log(err)
            })
        }
        else {
            setisUpdateQuery(false);
            console.log(updateIndex, isUpdateQuery);
            axios({
                url: 'http://localhost:3001/' + updateIndex,
                method: 'PUT',
                data: { name, roll }
            }).then(res => {
                setStudents(res.data)
                setName('');
                setRoll('')
            }).catch(err => {
                console.log(err)
            })

        }

    }

    const deleteHandler = (e, index) => {
        console.log('in deleteHandler')
        e.preventDefault();
        axios({
            url: 'http://localhost:3001/' + index,
            method: 'DELETE',
            data: { name, roll }
        }).then(res => {
            setStudents(res.data)
            setName('');
            setRoll('')
        }).catch(err => {
            console.log(err)
        })
    }
    const updateHandler = (e, index) => {
        console.log('in updateHandler')
        e.preventDefault();
        const { name, roll } = students[index];
        setisUpdateQuery(true);
        setupdateIndex(index);
        setName(name);
        setRoll(roll);
        // axios({
        //     url: 'http://localhost:3001/'+ index,
        //     method: 'DELETE',
        //     data: { name, roll }
        // }).then(res => setStudents(res.data)).catch(err => {
        //         console.log(err)
        //     })

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
                    onChange={event => setName(event.target.value)}
                    value={name} /><br></br>
                Roll: <input
                    type="Text"
                    value={roll}
                    onChange={event => setRoll(event.target.value)} /><br></br>
                <br></br>
                <button onClick={submitHandler}>Submit</button>
            </form>

            <br></br><br></br>
            {students.map((student, index) => <ul key={index}>
                <li> {student.roll} : {student.name} <button onClick={(e) => deleteHandler(e, index)}>Delete</button>
                    <button onClick={(e) => updateHandler(e, index)}>Update</button></li>
            </ul>)}
            <h1>{value}</h1>
        </div>
    )
}
export default Student