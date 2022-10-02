import React from 'react'
import {Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navigator () {
    return (
        <div className="bg-light">
            <Nav>
                    <Nav.Link as={NavLink} to="/intake">Collection</Nav.Link>  
                    <Nav.Link as={NavLink} to="/processing">Processing</Nav.Link>
                    <Nav.Link as={NavLink} to="/farm">Inventory Farm</Nav.Link>
            </Nav>
        </div>
    )
}
