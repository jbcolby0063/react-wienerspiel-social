import React from 'react'
import { Card, Container} from 'react-bootstrap'
import closeLogo from '../closeLogo.svg'
import { useAuth } from '../context/AuthContext'
import "../App.css"
import { postCloseButton } from '../style'
import FacebookPost from './FacebookPost'

export default function PostDetail({data}) {
    const titleL = data.title
    const socialL = data.socialMedia
    const { setPostDetailVisible } = useAuth()
    function cancelImage() {
        setPostDetailVisible(false)
    }

    function PostCheck() {
        if (socialL.includes("facebookCheck")) {
            return (
                <FacebookPost />
            )
        }
        if (socialL.includes("instagramCheck")) {
            // Add Instagram Post-specific analytics
        }

        if (socialL.includes("twitterCheck")) {
            // Add Twitter Post-specific analytics
        }
    }

    return (
        <Container style={{position: "absolute", top: "50%", left: "50%", zIndex: "2", marginRight: "-50%", transform: "translate(-50%, -50%)", width: "500px"}}>
            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Body>
                    <button onClick={cancelImage} className="closeButton d-flex flex-column align-items-center justify-content-center" style={postCloseButton}>
                        <img src={closeLogo} alt="closeLogo" /> 
                    </button>
                    {titleL}
                </Card.Body>
            </Card>
            {PostCheck()}
        </Container>
    )
}
