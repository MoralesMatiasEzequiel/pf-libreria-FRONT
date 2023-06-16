import SearchBar from "../SearchBar/SearchBar";
import style from "./Menu.module.css"
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {

    return (

        <div className={style.div}>


            <SearchBar />

            <Navbar variant="dark" bg="dark" expand="lg">

                <Container fluid>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Dark Web"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Lombrices</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Peruanos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Espaguetis</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">MachineGuns</NavDropdown.Item>
                                
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Princesas"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Rapuncels</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Negras
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Fionas</NavDropdown.Item>
                                
                            </NavDropdown>

                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Matias"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Plebello</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Bellaco
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Matatán</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Lambucio</NavDropdown.Item>
                                
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </div >

    );
}


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