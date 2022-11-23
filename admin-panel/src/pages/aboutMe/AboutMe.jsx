// import { useParams } from "react-router-dom";
import { HighlightOff, DeleteOutline } from '@material-ui/icons';
import { useEffect, useState } from "react";
import axios from "axios";
import "./aboutMe.css";
import { useHistory } from 'react-router-dom';

export default function AboutMe() {

    const history = useHistory();
    const [data, setData] = useState([]);
    const [techData, setTechData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [descr, setDescr] = useState('')
    const [img, setImg] = useState('')
    const [cv, setResume] = useState('')
    const [technology, setTechnology] = useState('')
    const [id, setId] = useState(new Date())

    let imageUrl = ''
    let resumeUrl = ''

    const fetchData = async () => {
        await axios
            .get(`http://localhost:5000/api/aboutMe/`)
            .then(res => {
                setData(res.data.data)
                setLoading(true)
            })
            .catch(err => console.log(err, 'err'))
    }


    const handleSubmitAdd = async (e) => {
        e.preventDefault();
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

        const resumeForm = new FormData()
        resumeForm.append("file", cv)
        resumeForm.append('upload_preset', "shohjahon")
        resumeForm.append('colud_name', "dnvfkkdbh")

        await fetch('https://api.cloudinary.com/v1_1/dnvfkkdbh/image/upload/', {
            method: 'post',
            body: resumeForm
        })
            .then(res => res.json())
            .then((res) => resumeUrl = res.url)
            .catch(err => console.log(err, 'err'))

        try {
            await axios.put(`http://localhost:5000/api/aboutMe/`, {
                descr: descr !== '' ? descr : data.descr,
                technologies: techData.length !== 0 ? [...data[0]?.technologies, ...techData] : data[0]?.technologies,
                image: imageUrl !== '' ? imageUrl : data.imageUrl,
                resume: resumeUrl !== '' ? resumeUrl : data.resumeUrl
                // descr,
                // technologies: techData,
                // image: imageUrl,
                // resume: resumeUrl
            })
                .then((res) => console.log(res, 'javob'))
                .catch(err => console.log(err, 'err'))
        }
        catch (error) {
            console.log(error, 'error')
        }

        setTechData([])
        setDescr('')
    }


    const removeAllTech = async () => {
        try {
            await axios.put(`http://localhost:5000/api/aboutMe/`, {
                descr: descr !== '' ? descr : data.descr,
                technologies: [],
                image: imageUrl !== '' ? imageUrl : data.imageUrl,
                resume: resumeUrl !== '' ? resumeUrl : data.resumeUrl
            })
                .then((res) =>{console.log(res, 'javob'); history.push('/about')})
                .catch(err => console.log(err, 'err'))
        }
        catch (error) {
            console.log(error, 'error')
        }        
    }

    const onSaveTechData = (e) => {
        e.preventDefault();
        technology && setTechData([...techData, { id, technology }])
        setTechnology('')
    }

    const deleteTech = (id) => {
        const newTechData = techData.filter(value => value.id !== id);
        setTechData(newTechData)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        loading ?
            <div className="product">
                <div className="productTitleContainer">
                    <h1 className="productTitle">About Me</h1>
                </div>
                <div className="productTop">
                    <div className="productTopRight">
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">Image:</span>
                                <span className="productInfoValue">{data[0]?.image}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Resume:</span>
                                <span className="productInfoValue">{data[0]?.resume}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">descr:</span>
                                <span className="productInfoValue">{data[0]?.descr}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">technologies:</span>
                                {
                                    data[0]?.technologies.map(({ id, technology }) => <span key={id} className="productInfoValue">{technology}</span>)
                                }
                            </div>
                            <div className='allRemoveTech'>Delete all technologies: <DeleteOutline onClick={removeAllTech} className='allDeleteIcon' /></div>
                        </div>
                    </div>
                </div>
                <div className="productBottom">
                    <form onSubmit={handleSubmitAdd} className="productForm">
                        <div className="productFormLeft">
                            <label>Image</label>
                            <input onChange={(e) => setImg(e.target.files[0])} type="file" placeholder="My Picture" />
                            <label>Resume</label>
                            <input onChange={(e) => setResume(e.target.files[0])} type="file" placeholder="My Resume" />
                            <label>Men haqida</label>
                            <textarea onChange={(e) => setDescr(e.target.value)} type="text" placeholder="Description"></textarea>
                            <label>Texnologiyalar</label>
                            <div className="productUpload">
                                <input onChange={(e) => setTechnology(e.target.value)} value={technology} type="text" placeholder="Technologies" />
                                <button onClick={onSaveTechData} type="button" className="productButton">add</button>
                            </div>
                            <div className="addTech">
                                {
                                    techData.map(value => <span key={value.id} onClick={() => deleteTech(value.id)}>{value.technology} <HighlightOff className="protechicon" /></span>)
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
