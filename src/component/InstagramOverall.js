import React, { useState, useEffect } from 'react'
import { ListGroup } from'react-bootstrap'
import { Bar } from 'react-chartjs-2'

export default function InstagramOverall() {
    const [reachData, setReachData] = useState("")

    const reachChart = {
        labels: ['Jun 14', 'Jun 21', 'Jun 28', 'Jul 5', 'Jul 12'],
        datasets: [
            {
                label: 'Accounts Reached (Weekly)',
                data: reachData,
                backgroundColor: "rgba(225, 48, 108, 0.3)",
                borderColor: "rgba(225, 48, 108, 1)",
                borderWidth: "1"
            }
        ]
    }

    const graphOptions = {
        responsive: true,
        maintainAspectRatio: false
    }

    const percentageCompare = (reachData[4] - reachData[3]) / reachData[3] * 100

    useEffect(() => {
        setReachData([10, 13, 15, 20, 12])
    }, [])
    
    return (
        <div className="overflow-auto" style={{maxHeight: "350px"}}>
            <ListGroup variant="flush">
                <ListGroup.Item style={{paddingLeft: "0px"}}>
                    <div style={{color: "#898989"}}>Weekly Reach</div>
                    <div style={{height: "200px"}}>
                        <Bar className="mt-2" data={reachChart} options={graphOptions} />
                    </div>
                        <div className="mt-2 mb-2" style={{textAlign: "center", color: "rgba(225, 48, 108, 0.8)"}}>{percentageCompare}% vs last week</div>
                </ListGroup.Item>
              
            </ListGroup>
        </div>
    )
}
