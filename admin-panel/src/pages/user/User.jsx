import {
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import "./user.css";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  
  const history = useHistory();
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const fetchData = async () => {
    await axios
      .get(`http://localhost:5000/api/user/${productId}`)
      .then(res => {
        setData(res.data.data)
        setLoading(true)
      })
      .catch(err => console.log(err, 'err'))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== '' && password !== '' && username !== '' && email !== '') {
      await axios
        .put(`http://localhost:5000/api/user/${productId}`, {
          name,
          username,
          email,
          password
        })
        .then(res => {
          console.log(res, 'update');
          history.push('/')
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
    loading ?
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">About User</h1>
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
                <span className="userShowInfoTitle">{data.password}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{data.email}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{`${data.isAdmin}`}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='userForm'>
            <div className="productFormLeft">
              <label>Name</label>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
              <label>Username</label>
              <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
              <label>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              <label>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
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
