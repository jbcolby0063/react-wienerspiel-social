import React, { useState, useContext, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import {ReactComponent as LogoutLogo} from '../logout.svg'
import {ReactComponent as Post} from '../post.svg'
import {ReactComponent as Analytics} from '../analytics.svg'
import SidebarRow from './SidebarRow'
import "../App.css"

export default function Sidebar() {
    const [error, setError] = useState("")
    const { logout, sidebarVisible, setSidebarVisible, currentScreen, setCurrentScreen } = useAuth()
    const history = useHistory()

    const sidebarFalseHere = () => {
        setCurrentScreen(window.innerWidth)
        if (currentScreen > 1300 && window.innerWidth < 1300) {
            setSidebarVisible(false)
        }
        
    }
    const smallScreenSetSidabar = () => {
        setCurrentScreen(window.innerWidth)
        if (currentScreen < 1300) {
            setSidebarVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", sidebarFalseHere)
        return () => {
          window.removeEventListener("resize", sidebarFalseHere)
        }
    })

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.pushState('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <div className={sidebarVisible ? "menu" : "menu nonactive"}>
           {error && <Alert variant="danger">{error}</Alert>} 
           <Link to="/" style={{textDecoration: "none"}} onClick={smallScreenSetSidabar}><SidebarRow Icon={Post} title="Post"/></Link>
           <div type="button"><SidebarRow Icon={Analytics} title="Analytics" /></div>
           <div type="button" onClick={handleLogout}><SidebarRow Icon={LogoutLogo} title="Logout" /></div>
        </div>
    )
}
