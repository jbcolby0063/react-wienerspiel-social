import React, { useRef, useState, useEffect }from 'react'
import { Form, Button, Card, Alert, CardColumns, ButtonGroup } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import {buttonStyle, linkStyle, memberLoginText, normalText} from '../style'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PostList from "./PostList"
import { db } from '../firebase'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

export default function Analytics() {
    const emailRef = useRef()
    const { currentUser, updateEmail, sidebarVisible } = useAuth() // access directly to signup function from the AuthContext.Provider value
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [dataList, setDataList] = useState()
    const history = useHistory()
    let data_string = "TITLE".padEnd(15) + "DATE".padEnd(15) + "SOCIAL MEDIA".padEnd(17) + "VIEWERS"
    useEffect(() => {
        const userID = currentUser.email.split("@")[0]
        const postList = db.ref("users/" + userID)
        postList.on('value', (snapshot) => {
            const data = snapshot.val()
            const getData = []
            for (let id in data) {
                getData.push(data[id])
            }
            setDataList(getData)
        })
    }, [])

    
    return (
    <>
    <div className="d-flex flex-column" style={{height: "100vh"}}>
        <div ><Topbar  /></div>
        <div className="page d-flex align-content-stretch" style={{flex: "1"}}>
        <Sidebar current="analyticspage" />
        <div id={sidebarVisible && "content"} className="content d-flex flex-wrap" style={{flex: "1"}}>
            <CardColumns className="m-5">
                <Card className="shadow" >
                    <Card.Body>
                        <Card.Title>Analytics 1</Card.Title>
                        <Card.Text>first</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="shadow" >
                    <Card.Body>
                        <Card.Title>Analytics 2</Card.Title>
                        <Card.Text>second</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="shadow" >
                    <Card.Body>
                        <Card.Title>Analytics 3</Card.Title>
                        <Card.Text>third</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="shadow">
                    <Card.Body>
                        <Card.Title style={{color: "#BB0101"}}><h3>Recent Posts</h3></Card.Title>
                        <Card.Text>
                            <div className="mt-3">
                                <div style={{paddingTop: "10px", paddingLeft: "20px"}}><pre style={{color: "#C93030"}}>{data_string}</pre></div>
                            
                                {dataList ? dataList.map((data) => <PostList data={data} />) : ""}
                            </div>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>

            </CardColumns>
        </div>
        </div>
    </div>
    </>
    )
}
