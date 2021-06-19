import React, { Component, useState, useEffect } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Card} from 'react-bootstrap'

function FacebookPost() {
    const [likes, setLikes] = useState(5)
    const [impressions, setImpressions] = useState(10)
    const [engagedUsers, setengagedUsers] = useState(15)
    const [reactionsChart, setReactionsChart] = useState({})
    const styles = {
        cardImage: {
            height: 100,
            width: 100
        }
    }

    const data = () => {
        setReactionsChart({
            labels: ["Likes","Love","Wow","Haha","Sorry","Anger"],
            datasets: [
                {
                label: "Reactions by Type",
                data:[5,1,1,4,2,6]
                }
            ]
        })

    }

    useEffect(() => {
        data()
    }, [])

    return(
        <div>
            <Card>
                <Card.Img src="https://pngimg.com/uploads/like/like_PNG14.png" style={styles.cardImage}/>
                <Card.Title>
                    {likes} Likes
                </Card.Title>
            </Card>
            <Card>
                <Card.Img src="https://www.seekpng.com/png/detail/103-1033438_as-akathmadevi-rightfully-points-out-social-media-social.png" style={styles.cardImage}/>
                <Card.Title>
                    {engagedUsers} Engaged Users
                </Card.Title>
            </Card>   
            <Card>
                <Card.Img src="https://toppng.com/uploads/preview/eye-clipart-11550204568stb0llflhd.png" style={styles.cardImage}/>
                <Card.Title>
                    {impressions} Impressions
                </Card.Title>
            </Card>
            <Pie
                data={reactionsChart}
                options={{
                    responsive:false
                }}
            >
            </Pie>              
        </div>
    )
}

export default FacebookPost

/*
const styles = {
    cardImage: {
        height: 30,
    }
}

class FacebookPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            impressions: props.impressions,
            likes: props.likes,
            engagedUsers: props.engagedUsers,
            reactionsChartData: props.reactionsChartData
        }
    }
    
    
    render() {
        return (
            <div>
                <Card>
                    <Card.Img src="https://pngimg.com/uploads/like/like_PNG14.png" style={styles.cardImage}/>
                    <Card.Title>
                       {this.state.likes} Likes
                    </Card.Title>
                </Card>
                <Card>
                    <Card.Img src="https://www.seekpng.com/png/detail/103-1033438_as-akathmadevi-rightfully-points-out-social-media-social.png" style={styles.cardImage}/>
                    <Card.Title>
                       {this.state.engagedUsers} Engaged Users
                    </Card.Title>
                </Card>   
                <Card>
                    <Card.Img src="https://toppng.com/uploads/preview/eye-clipart-11550204568stb0llflhd.png" style={styles.cardImage}/>
                    <Card.Title>
                       {this.state.impressions} Impressions
                    </Card.Title>
                </Card>
                <Pie
                  data={this.state.reactionsChartData}
                  options={{
                      responsive:false
                  }}
                >
                </Pie>              
            </div>
        )
    }
}

export default FacebookPost
*/