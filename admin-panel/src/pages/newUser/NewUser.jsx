import { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "./newCompany.css";

export default function NewUser() {
    const history = useHistory();

    const [username, setUsername] = useState('')
    const [password, setaPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (username !== '' && password !== '') {

                await axios.post('http://localhost:5000/api/user/register', {
                    username,
                    password,
                    isAdmin
                })
                    .then((res) => console.log(res, 'javob'),
                        history.push('/')
                    )
                    .catch(err => console.log(err, 'err'))
            }
            else alert('inputlarni tuldiring');
        }
        catch (error) {
            console.log(error, 'error')
        }
    }

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Admin</h1>
            <form onSubmit={handleSubmit} className="productForm">
                <div className="productFormLeft">
                    <label>Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
                    <label>Password</label>
                    <input onChange={(e) => setaPassword(e.target.value)} type="text" placeholder="PassWord" />
                    <div className="isAdmin">
                        <label>isAdmin</label>
                        <input onChange={(e) => setIsAdmin(e.target.checked)} type="checkbox" placeholder="isAdmin" />
                    </div>
                </div>
                <div className="productFormRight">
                    <button type="submit" className="productButton">Add</button>
                </div>
            </form>
        </div>
    );
}
