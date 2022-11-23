import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import "./topbar.css";

export default function Topbar({setSideHide}) {
  const history = useHistory()

  const removeToken = () => {
    localStorage.clear();
    setSideHide(false)
    history.push('/login')
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">  
        {
          localStorage.getItem("user") && <ExitToAppIcon onClick={removeToken} className='logOutIcon' />
        }                  
        </div>
      </div>
    </div>
  );
}
