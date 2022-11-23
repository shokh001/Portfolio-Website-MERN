import { useState } from 'react';
import axios from 'axios';
import './login.css'
import { useHistory } from 'react-router-dom';

const Login = ({setSideHide}) => {
  const history = useHistory();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:5000/api/user/login", { username, password })
        .then((res) => {
          if (res.status !== 200) {
            console.log(`Status code ${res.status}`);
          }
          else {
            localStorage.setItem("user", true);
            localStorage.setItem("token", res.data.accessToken);
            history.push('/')
            setSideHide(true)
          }
        })
        .catch((err) =>
          console.log(`Error in fetching data 😥   ${err.message}`)
        );
    } catch (e) {
      console.log(e.message);
    }



  }

  return (
    <div className='login'>
      <div>
        <form onSubmit={handleClick}>
          <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Enter your username' />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' />

          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login