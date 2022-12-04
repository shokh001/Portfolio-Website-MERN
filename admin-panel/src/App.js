import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import NewProduct from "./pages/newProduct/NewProduct";
import CompanyList from "./pages/companyList/CompanyList";
import Company from "./pages/company/Company";
import NewCompany from "./pages/newCompany/NewCompany";
import AboutMe from "./pages/aboutMe/AboutMe";
import Login from "./pages/login";
import { useEffect, useState } from "react";

function App() {
  const history = useHistory();
  const [sideHide, setSideHide] = useState(localStorage.getItem("user"));

  console.log(history);

  useEffect(() => {

    if (localStorage.getItem("user")) {
      history.push('/')
    } else history.push('/login')

  }, [])

  return (
    <>
      <Topbar setSideHide={setSideHide} />
      <div className="container">
        {
          sideHide && <Sidebar />
        }
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/user/:productId">
            <User />
          </Route>
          {/* <Route path="/newUser">
            <NewUser />
          </Route> */}
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/companies">
            <CompanyList />
          </Route>
          <Route path="/company/:productId">
            <Company />
          </Route>
          <Route path="/newcompany">
            <NewCompany />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
        </Switch>
      </div>
      <Route path="/login">
        <Login setSideHide={setSideHide} />
      </Route>
    </>
  );
}

export default App;
