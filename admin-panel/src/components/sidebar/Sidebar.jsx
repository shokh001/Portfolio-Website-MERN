import "./sidebar.css";
import {
  PermIdentity,
  Storefront,
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
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Portfolios
              </li>
            </Link>
            <Link to="/companies" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Companies
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}