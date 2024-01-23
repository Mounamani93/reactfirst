import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink,Routes, Route } from 'react-router-dom'

import Aboutus from './pages/Aboutus'


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (<>
        <header>
            <nav className="navbar">
                <Container fluid className='w-100 justify-content-center'>
                    <Row className='w-100'>
                        <Col sm="6" lg="3" xs="6"> <div className="logo">
                            <span>MM Brand</span>
                        </div></Col>
                        <Col sm="6" lg="9" xs="6"> 
                        <div className='topRightsection d-flex justify-content-end align-items-center'><div className="menu-icon" onClick={handleShowNavbar}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24"><g id="Group_9" data-name="Group 9" transform="translate(-294 -47)"><rect id="Rectangle_3" data-name="Rectangle 3" width="42" height="4" rx="2" transform="translate(304 47)" fill="#574c4c"></rect><rect id="Rectangle_5" data-name="Rectangle 5" width="42" height="4" rx="2" transform="translate(304 67)" fill="#574c4c"></rect><rect id="Rectangle_4" data-name="Rectangle 4" width="52" height="4" rx="2" transform="translate(294 57)" fill="#574c4c"></rect></g></svg>
                        </div>
                            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                            

                                <ul className='px-4'>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li><Routes>
                                    <Route path="about" element={ <Aboutus/> } />
                                    </Routes>
                                    </li>
                                    <li>
                                        <NavLink to="/projects">Projects</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                               

                            </div></div></Col>
                    </Row>
                </Container>
            </nav></header></>
    )
}

export default Navbar