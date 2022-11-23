import {  
  PermIdentity,
  PhoneAndroid,
  Visibility
} from "@material-ui/icons";
import "./user.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
var CryptoJS = require("crypto-js");

export default function User() {

  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [eye, setEye] = useState(false)

  const fetchData = async () => {
    await axios
      .get(`http://localhost:5000/api/user/${productId}`)
      .then(res => {
        console.log(res);
        setData(res.data.data)
        setLoading(true)
      })
      .catch(err => console.log(err, 'err'))
  }

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (password !== data.password || username !== data.username) {
      await axios
        .put(`http://localhost:5000/api/user/${productId}`, {
          username: username !== '' ? username : data.username,
          password: password !== '' ? password : CryptoJS.AES.decrypt(data.password, 'shoh').toString(CryptoJS.enc.Utf8)
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
  }, [])

  return (
    loading ?
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">About Admins</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{data.name}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{data.username}</span>
              </div>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{CryptoJS.AES.decrypt(data.password, 'shoh').toString(CryptoJS.enc.Utf8)}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='userForm'>
            <div className="productFormLeft">
              <label>Username</label>
              <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
              <label>Password</label>
              <div className="protuctFormInputWrapper">
                <input onChange={(e) => setPassword(e.target.value)} type={!eye? "password": 'text'} placeholder="Password" />
                <Visibility onClick={()=>setEye(!eye)} className="passwordEye" />
              </div>
            </div>
            <div className="productFormRight">
              <button type="submit" className="productButton">Update</button>
            </div>
          </form>
        </div>
      </div>
      :
      <div className="user">loading...</div>
  );
}
