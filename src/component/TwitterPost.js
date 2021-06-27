import React, {useState} from 'react'
import { ListGroup } from 'react-bootstrap'
import { Doughnut, Pie } from 'react-chartjs-2'

export default function TwitterPost() {
    const [likes, setLikes] = useState(17)
    const [views, setViews] = useState(40)
    const [retweet, setRetweet] = useState(30)
    const [reply, setReply] = useState(13)
    const [hashtags, setHashtags] = useState(["#wienerspiel", "#dog", "#cat", "#happy", "#summer"])

    return (
        <div>
            <ListGroup>
                <ListGroup.Item >
                    <div style={{color: "#898989"}}>Views</div>
                    <h4 className="mt-2" style={{color: "#1DA1F2"}}>{views}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Retweets</div>
                    <h4 className="mt-2" style={{color: "#1DA1F2"}}>{retweet}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Likes</div>
                    <h4 className="mt-2" style={{color: "#1DA1F2"}}>{likes}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Reply</div>
                    <h4 className="mt-2" style={{color: "#1DA1F2"}}>{reply}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div style={{color: "#898989"}}>Used Hashtags</div>
                    <div className="mt-2">
                        {hashtags ? hashtags.map((ht) => <h5 style={{color: "#1DA1F2"}}>{ht}</h5>) : <h3 style={{color: "#1DA1F2"}}>No Hashtags</h3>}
                    </div>
                </ListGroup.Item>        
            </ListGroup>
        </div>
    )
}