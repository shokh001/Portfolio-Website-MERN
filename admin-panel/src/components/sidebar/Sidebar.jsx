import "./sidebar.css";
import {
  PermIdentity,
  LibraryBooks,
  LocationCity,
  RecordVoiceOver
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Admins
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <LibraryBooks className="sidebarIcon" />
                Portfolioes
              </li>
            </Link>
            <Link to="/companies" className="link">
              <li className="sidebarListItem">
                <LocationCity className="sidebarIcon" />
                Companies
              </li>
            </Link>
            <Link to="/about" className="link">
              <li className="sidebarListItem">
                <RecordVoiceOver className="sidebarIcon" />
                About Me
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}