import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import NewProduct from "./pages/newProduct/NewProduct";
import CompanyList from "./pages/companyList/CompanyList";
import Company from "./pages/company/Company";
import NewCompany from "./pages/newCompany/NewCompany";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/user/:productId">
            <User />
          </Route>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
