import React from 'react'
import { Form, Button, Card, Alert, CardColumns, ButtonGroup } from 'react-bootstrap'
import {ReactComponent as FacebookLogo} from '../facebookLogo.svg'
import {ReactComponent as InstaLogo} from '../instagramLogo.svg'
import {ReactComponent as TwitterLogo} from '../twitterLogo.svg'
import "../App.css"

export default function PostList({data}) {
    const titleL = data.title.substring(0, 10).padEnd(15)
    const dateL = data.time.split(' ')[0] + data.time.split(' ')[1] + data.time.split(' ')[2]
    const dataL = titleL + dateL.padEnd(15)
    const socialL = data.socialMedia
    const viewerL = data.viewers
    return (
        <div className="postListButton" style={{borderRadius: "10px", padding: "15px 20px"}}>
            <pre style={{color:"#878787", margin: "0"}}>
                <div style={{float: "left"}}>{dataL}</div>
                <div style={{float: "left", width: "150px"}}>
                {socialL.includes("facebookCheck") && <FacebookLogo style={{width: "23px", height: "23px", marginBottom: "5px", marginRight: "10px"}} />} 
                {socialL.includes("instagramCheck") && <InstaLogo style={{width: "20px", height: "20px", marginBottom: "5px", marginRight: "10px"}} />}
                {socialL.includes("twitterCheck") && <TwitterLogo style={{width: "20px", height: "20px", marginBottom: "5px", marginRight: "10px"}} />}
                </div>
                <div style={{float: "left"}}>
                    {viewerL}
                </div>
            </pre> 
        </div>
    )
}
