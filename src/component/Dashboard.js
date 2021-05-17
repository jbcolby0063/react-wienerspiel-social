import React, { useState } from 'react'
import { Card, Button, Alert, Navbar } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import PostPage from './PostPage'
import UpdateProfile from './UpdateProfile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function Dashboard() {
    const [error, setError] = useState("")
    const history = useHistory()

    return (
        <div className="d-flex flex-column" style={{height: "100vh"}}>
            <div ><Topbar  /></div>
            <div className="page d-flex align-content-stretch" style={{flex: "1"}}>
                <Sidebar  />
                <PostPage />
            </div>
           
            {/* <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>} 
                    <strong>Email: </strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-2">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div> */}
        </div>
    )
}

