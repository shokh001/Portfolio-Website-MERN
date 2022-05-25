import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";

export default function Product() {

    const { productId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('')
    const [external_link, setExternal_link] = useState('')
    const [link, setLink] = useState('')
    const [descr, setDescr] = useState('')
    const [technology, setTechnology] = useState('')

    const fetchData = async () => {
        await axios
            .get(`http://localhost:5000/api/portfolio/${productId}`)
            .then(res => {
                setData(res.data.data)
                setLoading(true)
            })
            .catch(err => console.log(err, 'err'))
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();
        if (title !== '' && link !== '' && external_link !== '' && descr !== '' && technology !== '') {
            await axios
            .put(`http://localhost:5000/api/portfolio/${productId}`, {
                external_link,
                link,
                title,
                descr,
                technology
            })
            .then(res => {
                console.log(res, 'update');
            })
            .catch(err => console.log(err, 'err'))
        } else(
            alert('Inputlarni to`ldiring!!!')
        )
        
    }

    useEffect(() => {
        fetchData();
    })

    return (
        loading ?
            <div className="product">
                <div className="productTitleContainer">
                    <h1 className="productTitle">Portfolio</h1>
                </div>
                <div className="productTop">
                    <div className="productTopRight">
                        <div className="productInfoTop">
                            <span className="productName">{data.title}</span>
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
                                <span className="productInfoKey">external_link:</span>
                                <span className="productInfoValue">{data.external_link}</span>
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
                                <span className="productInfoKey">technology:</span>
                                <span className="productInfoValue">{data.technology}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productBottom">
                    <form onSubmit={handleSubmit} className="productForm">
                        <div className="productFormLeft">
                            <label>Website title</label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Website title" />
                            <label>Hostdagi link</label>
                            <input onChange={(e) => setExternal_link(e.target.value)} type="text" placeholder="Hostdagi link" />
                            <label>Github link</label>
                            <input onChange={(e) => setLink(e.target.value)} type="text" placeholder="Github link" />
                            <label>Website haqida</label>
                            <input onChange={(e) => setDescr(e.target.value)} type="text" placeholder="Description" />
                            <label>Texnologiyalar</label>
                            <input onChange={(e) => setTechnology(e.target.value)} type="text" placeholder="Texnologiyalar" />
                        </div>
                        <div className="productFormRight">
                            <button type="submit" className="productButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            :
            <div className="product">loading...</div>
    );
}
