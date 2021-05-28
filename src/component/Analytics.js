import React, { useRef, useState }from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import {buttonStyle, linkStyle, memberLoginText, normalText} from '../style'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

export default function Analytics() {
    const emailRef = useRef()
    const { currentUser, updateEmail, sidebarVisible } = useAuth() // access directly to signup function from the AuthContext.Provider value
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    
    return (
    <>
    <div className="d-flex flex-column" style={{height: "100vh"}}>
        <div ><Topbar  /></div>
        <div className="page d-flex align-content-stretch" style={{flex: "1"}}>
        <Sidebar />
        <div id={sidebarVisible && "content"} className="content d-flex align-items-center justify-content-center " style = {{flex: "1"}}>
            <div className="w-100 ml-auto mr-auto" style={{maxWidth: '400px'}} >
                analytics
            </div>
        </div>
        </div>
    </div>
    </>
    )
}
