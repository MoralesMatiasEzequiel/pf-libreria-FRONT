import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Menu.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { getAllProductsBySubcategory, FiltSubCategories } from "../../../redux/productActions";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const dispatch = useDispatch();

  const onClick = (arr) => {
    dispatch(getAllProductsBySubcategory(arr[0]));
    dispatch(FiltSubCategories(arr[1]));
  }

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("/subcategory/categoryEnum");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getSubcategories = async () => {
      try {
        const response = await axios.get("/subcategory");
        setSubcategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getSubcategories();
  }, []);


  return (
    <div className={style.div}>
      <SearchBar />

      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              {categories.map((category) => (
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={category}
                  menuVariant="dark"
                  key={category}
                >
                  {subcategories.map((subcategory) => {
                    if (subcategory.categories.includes(category)) {
                      return (
                        <NavDropdown.Item
                          key={subcategory.name}
                          href=""
                          onClick={() => onClick([subcategory._id, subcategory.name])}
                        >
                          <NavLink to='/shop' className={style.navLink}>
                            {subcategory.name}
                          </NavLink>
                        </NavDropdown.Item>
                      );
                    } else {
                      return null;
                    }
                  })}
                </NavDropdown>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;



        // <Navbar variant="dark" bg="dark" expand="lg">
        //     <SearchBar />
        //     <Container fluid>
        //         <Navbar.Toggle aria-controls="navbar-dark-example" />
        //         <Navbar.Collapse id="navbar-dark-example">
        //             <Nav>
        //                 <NavDropdown
        //                     id="nav-dropdown-dark-example"
        //                     title="Dropdown"
        //                     menuVariant="dark"
        //                 >
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">
        //                         Another action
        //                     </NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">
        //                         Separated link
        //                     </NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar >