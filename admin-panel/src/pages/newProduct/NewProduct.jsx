import { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (title !== '' && link !== '' && descr !== '' && technology !== '') {

       await axios.post('http://localhost:5000/api/portfolio/add', {
          external_link,
          link,
          title,
          descr,
          technology
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

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Website</h1>
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
          <button type="submit" className="productButton">Add</button>
        </div>
      </form>
    </div>
  );
}
