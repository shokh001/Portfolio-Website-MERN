import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import axios from "axios";
import "./product.css";

export default function Product() {

    const { productId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('')
    const [external_link, setExternal_link] = useState('')
    const [link, setLink] = useState('')
    const [img, setImg] = useState('')
    const [descr, setDescr] = useState('')
    const [technology, setTechnology] = useState('')
    const [techData, setTechData] = useState([]);
    const [id] = useState(new Date())

    let imageUrl = ''

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
        e.preventDefault();
        if (img !== '') {
            const imgForm = new FormData()
            imgForm.append("file", img)
            imgForm.append('upload_preset', "shohjahon")
            imgForm.append('colud_name', "dnvfkkdbh")

            await fetch('https://api.cloudinary.com/v1_1/dnvfkkdbh/image/upload/', {
                method: 'post',
                body: imgForm
            })
                .then(res => res.json())
                .then((res) => imageUrl = res.url)
                .catch(err => console.log(err, 'err'))
        }

        await axios
            .put(`http://localhost:5000/api/portfolio/${productId}`, {
                external_link: external_link !== '' ? external_link : data.external_link,
                link: link !== '' ? link : data.link,
                title: title !== '' ? title : data.title,
                image: imageUrl !== '' ? imageUrl : data.image,
                descr: descr !== '' ? descr : data.descr,
                technology: techData.length !== 0 ? [...data.technology, ...techData] : data.technology,
            })
            .then(res => {
                console.log(res, 'update');
            })
            .catch(err => console.log(err, 'err'))

    }

    useEffect(() => {
        fetchData();
    }, [])

    const onSaveTechData = (e) => {
        e.preventDefault();
        technology && setTechData([...techData, { id, technology }])
        setTechnology('')
    }

    const deleteTech = (id) => {
        const newTechData = techData.filter(value => value.id !== id);
        setTechData(newTechData)
    }

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
                                <span className="productInfoKey">Image:</span>
                                <img src={data.image} alt="data.image" />
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
                                {
                                    data.technology.map((value) => <span key={value.id} className="productInfoValue">{value.technology}</span>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productBottom">
                    <form onSubmit={handleSubmit} className="productForm">
                        <div className="productFormLeft">
                            <label>Website title</label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Website title" />
                            <label>Url</label>
                            <input onChange={(e) => setExternal_link(e.target.value)} type="text" placeholder="Url on the host" />
                            <label>Github url</label>
                            <input onChange={(e) => setLink(e.target.value)} type="text" placeholder="Url on the github" />
                            <label>About the website</label>
                            <input onChange={(e) => setDescr(e.target.value)} type="text" placeholder="Description" />
                            <label>Project Image</label>
                            <input onChange={(e) => setImg(e.target.files[0])} type="file" placeholder="My Picture" />
                            <label>Technologies</label>
                            <div className="productUpload">
                                <input onChange={(e) => setTechnology(e.target.value)} value={technology} type="text" placeholder="Technologies" />
                                <button onClick={onSaveTechData} type="button" className="productButton">add</button>
                            </div>
                            <div className="addTech">
                                {
                                    techData.map(value => <span onClick={() => deleteTech(value.id)}>{value.technology} <HighlightOffIcon className="protechicon" /></span>)
                                }
                            </div>
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
