import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./company.css";

export default function Company() {
    const { productId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('')
    const [role, setRole] = useState('')
    const [link, setLink] = useState('')
    const [descr, setDescr] = useState('')
    const [date, setDate] = useState('')

    const fetchData = async () => {
        await axios
            .get(`http://localhost:5000/api/company/${productId}`)
            .then(res => {
                setData(res.data.data)
                setLoading(true)
            })
            .catch(err => console.log(err, 'err'))
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();
        if (title !== '' && link !== '' && role !== '' && descr !== '' && date !== '') {
            await axios
                .put(`http://localhost:5000/api/company/${productId}`, {
                    title,
                    role,
                    link,
                    descr,
                    date
                })
                .then(res => {
                    console.log(res, 'update');
                })
                .catch(err => console.log(err, 'err'))
        } else (
            alert('Inputlarni to`ldiring!!!')
        )
    }

    useEffect(() => {
        fetchData();
    })
    return (
        loading? 
        <div className="company">
            <div className="companyTitleContainer">
                <h1 className="companyTitle">Company</h1>
            </div>
            <div className="companyTop">
                <div className="companyTopRight">
                    <div className="companyInfoTop">
                        <span className="companyName">{data.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{data._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">title:</span>
                            <span className="productInfoValue">{data.title}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">link:</span>
                            <span className="productInfoValue">{data.link}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">descr:</span>
                            <span className="productInfoValue">{data.descr}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">date:</span>
                            <span className="productInfoValue">{data.date}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">role:</span>
                            <span className="productInfoValue">{data.role}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="companyBottom">
                <form onSubmit={handleSubmit} className="productForm">
                    <div className="productFormLeft">
                        <label>Company Name</label>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Name" />
                        <label>Companiya website</label>
                        <input onChange={(e) => setLink(e.target.value)} type="text" placeholder="Company website" />
                        <label>Date qancha vaqt ishlagan</label>
                        <input onChange={(e) => setDate(e.target.value)} type="text" placeholder="Company website" />
                        <label>Companiya haqida</label>
                        <input onChange={(e) => setDescr(e.target.value)} type="text" placeholder="Description" />
                        <label>Role</label>
                        <input onChange={(e) => setRole(e.target.value)} type="text" placeholder="Vazifasi" />
                    </div>
                    <div className="productFormRight">
                        <button type="submit" className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
        :
        <div className="company">loading...</div>
    );
}
