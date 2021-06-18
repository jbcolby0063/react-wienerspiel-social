import React from 'react'
import { Card, Container} from 'react-bootstrap'
import closeLogo from '../closeLogo.svg'
import { useAuth } from '../context/AuthContext'
import "../App.css"
import { postCloseButton } from '../style'

export default function PostDetail({data}) {
    const titleL = data.title
    const { setPostDetailVisible } = useAuth()
    function cancelImage() {
        setPostDetailVisible(false)
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
        </Container>
    )
}
