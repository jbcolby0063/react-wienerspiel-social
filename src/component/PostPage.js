import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert, Container, Row, Col } from 'react-bootstrap'
import { postButtonStyle } from '../style'
import { useAuth } from '../context/AuthContext'
import "../App.css"
import {ReactComponent as FacebookLogo} from '../facebookLogo.svg'
import {ReactComponent as InstaLogo} from '../instagramLogo.svg'
import {ReactComponent as TwitterLogo} from '../twitterLogo.svg'
import cancelLogo from '../cancelLogo.svg'

export default function PostPage() {
    const imageRef = useRef()
    const [uploadImage, setUploadImage] = useState(null)
    const { sidebarVisible } = useAuth()


    function handleImage(event) {
        if (event.target.files[0] != null) {
            setUploadImage(URL.createObjectURL(event.target.files[0]))
        }
    }

    return (
        <Container id={sidebarVisible && "content"} className="d-flex align-items-center justify-content-center" style = {{flex: "1"}}>
            <div className="w-100 ml-auto mr-auto" style={{maxWidth: '500px'}} >
                <Form>
                    <div className="d-flex align-items-center justify-content-center">
                    <Form.Group id="title">
                        <Form.Control className="mb-1" type="text" required placeholder="Title for the post" style={{width: "300px", height:"40px"}}/>
                    </Form.Group>
                    </div>
                
                    <Card style={{maxHeight: "600px"}}>
                        <Card.Body className="d-flex flex-column overflow-auto" style={{flex: "1"}}>
                            <Card.Img src={uploadImage} style={{minHeight:"260px"}} />
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" required ref={imageRef} onChange={handleImage} />
                            </Form.Group>

                            <Form.Group id="textpost">
                                <Form.Control className="border border-white overflow-auto" as="textarea" required rows={10} placeholder="Write a caption..." style={{minHeight: "200px", maxHeight: "200px"}}/>
                            </Form.Group>
                            <div className="d-flex justify-content-center mt-auto">
                            <Row>
                                <Col ><input type="checkbox" class="form-check-input position-static" /><FacebookLogo style={{marginLeft: "10px", marginBottom: "5px"}} /></Col>
                                <Col style={{margin: "0px 20px"}}><input type="checkbox" class="form-check-input position-static" /><InstaLogo style={{marginLeft: "10px", marginBottom: "5px"}}  /></Col>
                                <Col><input type="checkbox" class="form-check-input position-static" /><TwitterLogo style={{marginLeft: "10px", marginBottom: "5px"}} /></Col>
                            </Row>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="d-flex align-items-center justify-content-center">
                    {/* disabled={loading} */}
                    <Button className="mt-4" type="submit" variant="danger" style={postButtonStyle}>Post</Button>   
                    </div>
                </Form>
            </div>
        </Container>
    )
}
