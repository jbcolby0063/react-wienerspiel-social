import React, {useState} from 'react'
import { ListGroup } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2'

export default function FacebookPost() {
    const [likes, setLikes] = useState(5)
    const [views, setViews] = useState(10)
    const [engagedUsers, setEngagedUsers] = useState(15)
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

    const reactionData = {
        labels: ["Likes", "Love", "Wow", "Haha", "Sorry", "Anger"],
        datasets: [
          {
            label: "Reactions by Type",
            data: [5, 1, 1, 4, 2, 6],
            backgroundColor: [
                "rgb(54, 162, 235)",
                "rgba(240, 1, 159, 0.67)",
                "rgba(149, 1, 240, 0.56)",
                "rgba(1, 240, 25, 0.66)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)"
            ]
          }
        ],
        hoverOffset: 4
    };

    const reactionOptions = {
        responsive: true,
        maintainAspectRatio: false
    }

    return (
        <div>
            <ListGroup>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Views</div>
                    <h4 className="mt-2" style={{color: "#4267B2"}}>{views}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Likes</div>
                    <h4 className="mt-2" style={{color: "#4267B2"}}>{likes}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Engaged Users</div>
                    <h4 className="mt-2" style={{color: "#4267B2"}}>{engagedUsers}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Reaction Chart</div>
                    <div className="mt-2" style={{height: "350px"}}>
                        <Doughnut data={reactionData} options={reactionOptions} />
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}


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