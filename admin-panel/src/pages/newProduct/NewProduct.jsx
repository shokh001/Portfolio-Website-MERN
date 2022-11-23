import { useState } from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "./newProduct.css";

export default function NewProduct() {

  const history = useHistory();

  const [title, setTitle] = useState('')
  const [external_link, setExternal_link] = useState('')
  const [link, setLink] = useState('')
  const [descr, setDescr] = useState('')
  const [technology, setTechnology] = useState('')
  const [techData, setTechData] = useState([]);
  const [id, setId] = useState(new Date())

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (title !== '' && link !== '' && descr !== '' && techData !== '') {

        await axios.post('http://localhost:5000/api/portfolio/add', {
          external_link,
          link,
          title,
          descr,
          technology: techData
        })
          .then((res) => console.log(res, 'javob'),
            history.push('/products')
          )
          .catch(err => console.log(err, 'err'))
      }
      else alert('inputlarni tuldiring');
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

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Website</h1>
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
          <button type="submit" className="productButton">Add</button>
        </div>
      </form>
    </div>
  );
}
