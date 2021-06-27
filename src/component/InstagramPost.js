import React, { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Doughnut, Pie } from 'react-chartjs-2'

export default function InstagramPost() {
    const [likes, setLikes] = useState("")
    const [views, setViews] = useState("")
    const [reach, setReach] = useState("")
    const [comments, setComment] = useState("")
    const [genderData, setGenderData] = useState("")
    const [ageData, setAgeData] = useState("")

    const genderChart = {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Gender",
            data: genderData,
            backgroundColor: [
                "rgb(54, 162, 235)",
                "rgb(255, 99, 132)"
            ]
          }
        ],
        hoverOffset: 4
    };

    const ageChart = {
        labels: ["1-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80"],
        datasets: [
          {
            label: "Age",
            data: ageData,
            backgroundColor: [
                "#fc4444",
                "#fc6404",
                "#fcd444",
                "#8cc43c",
                "#1abc9c",
                "#5bc0de",
                "#6454ac",
                "#fc8c84"
            ]
          }
        ],
        hoverOffset: 4
    };

    const graphOptions = {
        responsive: true,
        maintainAspectRatio: false
    }

    useEffect(() => {
        setLikes(17)
        setViews(40)
        setReach(30)
        setComment(13)
        setGenderData([25, 15])
        setAgeData([1, 3, 5, 6, 11, 12, 15, 10])
    }, [])

    return (
        <div>
            <ListGroup>
                <ListGroup.Item >
                    <div style={{color: "#898989"}}>Views</div>
                    <h4 className="mt-2" style={{color: "#E1306C"}}>{views}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Likes</div>
                    <h4 className="mt-2" style={{color: "#E1306C"}}>{likes}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Comments</div>
                    <h4 className="mt-2" style={{color: "#E1306C"}}>{comments}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Accounts Reach</div>
                    <h4 className="mt-2" style={{color: "#E1306C"}}>{reach}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Gender</div>
                    <div className="mt-2" style={{height: "350px"}}>
                        <Pie data={genderChart} options={graphOptions} />
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Age</div>
                    <div className="mt-2" style={{height: "350px"}}>
                        <Doughnut data={ageChart} options={graphOptions} />
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}