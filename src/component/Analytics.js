import React, { useState, useEffect }from 'react'
import { Card, ProgressBar } from 'react-bootstrap'
import { Line, Bar } from 'react-chartjs-2'
import { useAuth } from '../context/AuthContext'
import { postList, analyticsIcons } from '../style'
import PostList from "./PostList"
import PostDetail from './PostDetail'
import { db } from '../firebase'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import {ReactComponent as FacebookLogo} from '../facebookLogo.svg'
import {ReactComponent as InstaLogo} from '../instagramLogo.svg'
import {ReactComponent as RecentPostLogo} from '../recentPostLogo.svg'
import {ReactComponent as TotalViewsLogo} from '../totalViewsLogo.svg'
import "../App.css"

export default function Analytics() {
    const { currentUser, sidebarVisible, postDetailVisible, setPostDetailVisible } = useAuth() // access directly to the values from the AuthContext.Provider 
    const [dataList, setDataList] = useState()
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
    
    const totalViewsData = {
        labels: ['Jun 19', 'Jun 20', 'Jun 21', 'Jun 22', 'Jun 23', 'Jun 24', 'Jun 25'],
        datasets: [
          {
            label: 'Total Views',
            data: [30, 76, 80, 130, 110, 101, 79],
            fill: true,
            backgroundColor: "rgba(187, 1, 1, 0.3)",
            borderColor: '#BB0101',
            tension: "0.1"
          },
        ],
    };

    const totalViewsOptions = {
        responsive: true,
        maintainAspectRatio: false
    }

    const instaOvData = {
        labels: ['Jun 14', 'Jun 21', 'Jun 28', 'Jul 5', 'Jul 12'],
        datasets: [
            {
                label: 'Accounts Reached (Weekly)',
                data: [10, 13, 15, 20, 12],
                backgroundColor: "rgba(138, 58, 185, 0.5)",
                borderColor: "rgba(138, 58, 185, 1)",
                borderWidth: "1"
            }
        ]
    }

    const instaOvOptions = {
        responsive: true,
        maintainAspectRatio: false
    }

    return (
    <>
    {postDetailVisible && <PostDetail data={postDetailVisible} />}
    
    <div id={postDetailVisible && "analyticsBg"} className="d-flex flex-column" style={{height: "100vh"}}>
        <div ><Topbar /></div>
        <div className="page d-flex align-content-stretch" style={{flex: "1"}}>
        <Sidebar current="analyticspage" />
        <div id={sidebarVisible && "content"} className="content d-flex w-100 p-5 overflow-auto" style={{flex: "1"}}>
            <div className="d-flex flex-row flex-wrap" style={{margin: "auto"}}>
                <div className="d-flex flex-column mr-4" style={{width: "780px"}}>
                    <Card className="shadow mt-3" style={{width: "780px", height: "350px"}}>
                        <Card.Body>
                            <Card.Title><TotalViewsLogo style={analyticsIcons} /><h3 style={{color: "#BB0101"}}>Total Viewers</h3></Card.Title>
                            <Card.Subtitle className="mb-2" style={{color:"#878787"}}>Last 7 Days</Card.Subtitle>
                            <Card.Text><div style={{height: "250px"}}><Line data={totalViewsData} options={totalViewsOptions} /></div></Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="d-flex flex-row">
                        <Card className="shadow mt-3" style={{width: "385px", height: "450px", marginRight: "10px"}}>
                            <Card.Body>
                                <Card.Title><FacebookLogo style={analyticsIcons} /><h3 style={{color: "#BB0101"}}>Facebook</h3></Card.Title>
                                <Card.Subtitle className="mb-2" style={{color:"#878787"}}>Overall Analytics</Card.Subtitle>
                                <Card.Text>second</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="shadow mt-3" style={{width: "385px", height: "450px"}}>
                            <Card.Body>
                                <Card.Title><InstaLogo style={{width: "25px", height: "25px", marginTop:"5px", marginRight: "9px", float: "left", fill: "#BB0101"}} /><h3 style={{color: "#BB0101"}}>Instagram</h3></Card.Title>
                                <Card.Text>
                                    <div style={{height: "200px"}}>
                                        <div style={{color:"#A9A9A9", fontWeight: "bold"}}>Overall Reach</div>
                                        <Bar className="mt-2" data={instaOvData} options={instaOvOptions} />
                                        <div style={{textAlign: "center", color: "rgba(138, 58, 185, 0.8)"}}>-40.0% vs last week</div>
                                    </div>
                                    <div style={{marginTop: "60px", height: "100px"}}>
                                        <div style={{color:"#A9A9A9", fontWeight: "bold"}}>Top 2 Views</div>
                                        <div className="mt-2">
                                        <pre className="mt-2" ><div className="mr-3" style={{color:"#878787", width: "90px", float: "left", position: "relative", bottom: "2px"}}>hello worl</div><div style={{float: "left", color:"#878787", position: "relative", bottom: "2px", width: "30px", textAlign: "right", marginRight: "3px"}}>150</div><div style={{width: "200px", float: "left"}}><ProgressBar now={70}  /></div></pre>
                                        <pre className="mt-2" ><div className="mr-3" style={{color:"#878787", width: "90px", float: "left", position: "relative", bottom: "2px"}}>third</div><div style={{float: "left", color:"#878787", position: "relative", bottom: "2px", width: "30px", textAlign: "right", marginRight: "3px"}}>40</div><div style={{width: "200px", float: "left"}}><ProgressBar now={30}  /></div></pre>
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div>
                    <Card className="shadow overflow-auto mt-3" style={{width: "520px", height:"816px"}}>
                        <Card.Body>
                            <Card.Title><RecentPostLogo style={analyticsIcons} /><h3 style={{color: "#BB0101"}}>Recent Posts</h3></Card.Title>
                            <Card.Text>
                                <div className="mt-3">
                                    <div style={{paddingTop: "10px", paddingLeft: "20px"}}><pre style={{color: "#C93030"}}>{data_string}</pre></div>
                                
                                    {dataList ? dataList.map((data) => 
                                    <button type="button" className="postListButton overflow-auto" onClick={() => {setPostDetailVisible(data)}} style={postList}>
                                        <PostList data={data} />
                                    </button>) : ""}
                                </div>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}
