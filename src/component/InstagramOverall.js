import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'

export default function InstagramOverall() {
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
        <div>
            <div style={{height: "200px"}}>
                <div style={{color:"#A9A9A9", fontWeight: "bold"}}>Overall Reach</div>
                <Bar className="mt-2" data={instaOvData} options={instaOvOptions} />
                <div style={{textAlign: "center", color: "rgba(138, 58, 185, 0.8)"}}>-40.0% vs last week</div>
            </div>
        <div style={{marginTop: "60px", height: "100px"}}>
            <div style={{color:"#A9A9A9", fontWeight: "bold"}}>Top 2 Views</div>
            <div className="mt-2">
                <pre className="mt-2" >
                    <div className="mr-3" style={{color:"#878787", width: "90px", float: "left", position: "relative", bottom: "2px"}}>hello worl</div>
                    <div style={{float: "left", color:"#878787", position: "relative", bottom: "2px", width: "30px", textAlign: "right", marginRight: "3px"}}>150</div>
                    <div style={{width: "200px", float: "left"}}><ProgressBar now={150/150*100}  /></div>
                </pre>
                <pre className="mt-2" >
                    <div className="mr-3" style={{color:"#878787", width: "90px", float: "left", position: "relative", bottom: "2px"}}>third</div>
                    <div style={{float: "left", color:"#878787", position: "relative", bottom: "2px", width: "30px", textAlign: "right", marginRight: "3px"}}>40</div>
                    <div style={{width: "200px", float: "left"}}><ProgressBar now={40/150*100}  /></div>
                </pre>
            </div>
        </div>
    </div>
    )
}
