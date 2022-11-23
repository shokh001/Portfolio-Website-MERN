import { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "./newCompany.css";

export default function NewCompany() {
    const history = useHistory();

    const [title, setTitle] = useState('')
    const [role, setRole] = useState('')
    const [link, setLink] = useState('')
    const [descr, setDescr] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (title !== '' && link !== '' && role !== '' && descr !== '' && date !== '') {

                await axios.post('http://localhost:5000/api/company/add', {
                    title,
                    role,
                    link,
                    descr,
                    date
                })
                    .then((res) => console.log(res, 'javob'),
                        history.push('/companies')
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
            <h1 className="addProductTitle">New Company</h1>
            <form onSubmit={handleSubmit} className="productForm">
                <div className="productFormLeft">
                    <label>Company Name</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Name" />
                    <label>Companiya website</label>
                    <input onChange={(e) => setLink(e.target.value)} type="text" placeholder="The website of company" />
                    <label>Worked Date</label>
                    <input onChange={(e) => setDate(e.target.value)} type="text" placeholder="Date" />
                    <label>About the company</label>
                    <textarea onChange={(e) => setDescr(e.target.value)} type="text" placeholder="Description"></textarea>
                    <label>Role</label>
                    <input onChange={(e) => setRole(e.target.value)} type="text" placeholder="Responsibility" />
                </div>
                <div className="productFormRight">
                    <button type="submit" className="productButton">Add</button>
                </div>
            </form>
        </div>
    );
}
